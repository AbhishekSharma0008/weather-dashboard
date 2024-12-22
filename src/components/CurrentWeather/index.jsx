import React from 'react';
import { useWeather } from '../../context/WeatherContext';
import { formatTemp } from '../../utils/formatters';
import WeatherIcon from '../WeatherIcon';
import WeatherDetails from './WeatherDetails';

function CurrentWeather() {
  const { currentWeather } = useWeather();

  if (!currentWeather) return null;

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">{currentWeather.city}</h2>
          <p className="text-lg opacity-90">{currentWeather.description}</p>
        </div>
        <WeatherIcon code={currentWeather.icon} size="large" />
      </div>
      
      <div className="mt-6">
        <div className="text-6xl font-bold">{formatTemp(currentWeather.temp)}°</div>
        <WeatherDetails
          feelsLike={currentWeather.feelsLike}
          humidity={currentWeather.humidity}
          windSpeed={currentWeather.windSpeed}
          pressure={currentWeather.pressure}
        />
      </div>
    </div>
  );
}

export default CurrentWeather;