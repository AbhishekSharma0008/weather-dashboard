import React from 'react';
import { useWeather } from '../context/WeatherContext';
import { formatTemp } from '../utils/formatters';
import WeatherIcon from './WeatherIcon';
import { format } from 'date-fns';

function Forecast() {
  const { forecast } = useWeather();

  if (!forecast) return null;

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 text-white">
      <h3 className="text-xl font-semibold mb-4">5-Day Forecast</h3>
      <div className="space-y-4">
        {forecast.map((day) => (
          <div key={day.date} className="flex items-center justify-between">
            <div className="flex items-center">
              <WeatherIcon code={day.icon} size="small" />
              <div className="ml-3">
                <p className="font-medium">{format(new Date(day.date), 'EEEE')}</p>
                <p className="text-sm opacity-70">{day.description}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold">{formatTemp(day.temp)}°</p>
              <p className="text-sm opacity-70">{formatTemp(day.tempMin)}° / {formatTemp(day.tempMax)}°</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;