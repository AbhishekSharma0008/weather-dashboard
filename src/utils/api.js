import axios from 'axios';
import { API_KEY, BASE_URL, GEO_URL } from './constants';
import { transformCurrentWeather, transformForecast } from './transformers';

async function getCoordinates(city) {
  const response = await axios.get(
    `${GEO_URL}/direct?q=${encodeURIComponent(city)}&limit=1&appid=${API_KEY}`
  );

  if (!response.data.length) {
    throw new Error('City not found');
  }

  return response.data[0];
}

async function fetchWeatherAndForecast(lat, lon) {
  return Promise.all([
    axios.get(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`),
    axios.get(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
  ]);
}

export async function fetchWeatherData(city) {
  try {
    const { lat, lon } = await getCoordinates(city);
    const [currentResponse, forecastResponse] = await fetchWeatherAndForecast(lat, lon);

    return {
      current: transformCurrentWeather(currentResponse.data),
      forecast: transformForecast(forecastResponse.data.list)
    };
  } catch (error) {
    console.error('API Error:', error);
    if (error.response?.status === 404 || error.message === 'City not found') {
      throw new Error('City not found');
    }
    throw new Error('Failed to fetch weather data');
  }
}