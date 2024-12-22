import React, { useState } from 'react';
import { useWeather } from '../../context/WeatherContext';
import SearchInput from './SearchInput';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const { fetchWeather } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchWeather(query);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <SearchInput
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}