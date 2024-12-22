import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchInput({ value, onChange }) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
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
  );
}