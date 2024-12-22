import React from 'react';

const iconMap = {
  '01d': '☀️',
  '01n': '🌙',
  '02d': '⛅',
  '02n': '☁️',
  '03d': '☁️',
  '03n': '☁️',
  '04d': '☁️',
  '04n': '☁️',
  '09d': '🌧️',
  '09n': '🌧️',
  '10d': '🌦️',
  '10n': '🌧️',
  '11d': '⛈️',
  '11n': '⛈️',
  '13d': '🌨️',
  '13n': '🌨️',
  '50d': '🌫️',
  '50n': '🌫️'
};

function WeatherIcon({ code, size = 'medium' }) {
  const sizeClasses = {
    small: 'text-2xl',
    medium: 'text-4xl',
    large: 'text-6xl'
  };

  return (
    <span className={sizeClasses[size]}>
      {iconMap[code] || '☀️'}
    </span>
  );
}

export default WeatherIcon;