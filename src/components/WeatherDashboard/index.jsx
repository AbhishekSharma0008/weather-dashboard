import React from 'react';
import SearchBar from '../SearchBar';
import CurrentWeather from '../CurrentWeather';
import Forecast from '../Forecast';
import { useWeather } from '../../context/WeatherContext';

export default function WeatherDashboard() {
  const { loading, error } = useWeather();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white text-center mb-8">Weather Dashboard</h1>
      <SearchBar />
      
      {loading && (
        <div className="text-white text-center mt-8">Loading weather data...</div>
      )}
      
      {error && (
        <div className="text-red-200 text-center mt-8">{error}</div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <CurrentWeather />
        </div>
        <div>
          <Forecast />
        </div>
      </div>
    </div>
  );
}