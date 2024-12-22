import React from 'react';
import { useWeather } from '../context/WeatherContext';
import { formatTemp } from '../utils/formatters';
import WeatherIcon from './WeatherIcon';

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
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm opacity-70">Feels like</p>
            <p className="text-xl">{formatTemp(currentWeather.feelsLike)}°</p>
          </div>
          <div>
            <p className="text-sm opacity-70">Humidity</p>
            <p className="text-xl">{currentWeather.humidity}%</p>
          </div>
          <div>
            <p className="text-sm opacity-70">Wind</p>
            <p className="text-xl">{currentWeather.windSpeed} km/h</p>
          </div>
          <div>
            <p className="text-sm opacity-70">Pressure</p>
            <p className="text-xl">{currentWeather.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;