import React from 'react';
import { formatTemp } from '../../utils/formatters';

function WeatherDetails({ feelsLike, humidity, windSpeed, pressure }) {
  const details = [
    { label: 'Feels like', value: `${formatTemp(feelsLike)}°` },
    { label: 'Humidity', value: `${humidity}%` },
    { label: 'Wind', value: `${windSpeed} km/h` },
    { label: 'Pressure', value: `${pressure} hPa` }
  ];

  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
      {details.map(({ label, value }) => (
        <div key={label}>
          <p className="text-sm opacity-70">{label}</p>
          <p className="text-xl">{value}</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherDetails;