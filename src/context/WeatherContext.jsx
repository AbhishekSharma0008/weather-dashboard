import React, { createContext, useContext, useState } from 'react';
import { fetchWeatherData } from '../utils/api';

const WeatherContext = createContext(null);

export function WeatherProvider({ children }) {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchWeatherData(city);
      setCurrentWeather(data.current);
      setForecast(data.forecast);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      console.error('Weather fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    currentWeather,
    forecast,
    loading,
    error,
    fetchWeather
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);
  if (context === null) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
}