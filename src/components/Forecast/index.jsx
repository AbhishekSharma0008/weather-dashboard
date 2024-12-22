import React from 'react';
import { useWeather } from '../../context/WeatherContext';
import ForecastItem from './ForecastItem';

function Forecast() {
  const { forecast } = useWeather();

  if (!forecast) return null;

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 text-white">
      <h3 className="text-xl font-semibold mb-4">5-Day Forecast</h3>
      <div className="space-y-4">
        {forecast.map((day) => (
          <ForecastItem key={day.date} day={day} />
        ))}
      </div>
    </div>
  );
}

export default Forecast;