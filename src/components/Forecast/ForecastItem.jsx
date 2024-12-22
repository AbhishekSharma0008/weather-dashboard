import React from 'react';
import { format } from 'date-fns';
import { formatTemp } from '../../utils/formatters';
import WeatherIcon from '../WeatherIcon';

function ForecastItem({ day }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <WeatherIcon code={day.icon} size="small" />
        <div className="ml-3">
          <p className="font-medium">{format(new Date(day.date), 'EEEE')}</p>
          <p className="text-sm opacity-70">{day.description}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold">{formatTemp(day.temp)}°</p>
        <p className="text-sm opacity-70">
          {formatTemp(day.tempMin)}° / {formatTemp(day.tempMax)}°
        </p>
      </div>
    </div>
  );
}

export default ForecastItem;