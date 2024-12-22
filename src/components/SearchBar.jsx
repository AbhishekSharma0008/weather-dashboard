import React, { useState } from 'react';
import { useWeather } from '../context/WeatherContext';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
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
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a city..."
          className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
        >
          <FaSearch />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;