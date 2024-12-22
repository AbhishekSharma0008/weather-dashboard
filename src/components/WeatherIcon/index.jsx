import React from 'react';
import { weatherIcons } from './weatherIcons';

export default function WeatherIcon({ code, size = 'medium' }) {
  const sizeClasses = {
    small: 'text-2xl',
    medium: 'text-4xl',
    large: 'text-6xl'
  };

  return (
    <span className={sizeClasses[size]}>
      {weatherIcons[code] || '☀️'}
    </span>
  );
}