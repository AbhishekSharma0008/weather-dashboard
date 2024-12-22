import React from 'react';
import WeatherDashboard from './components/WeatherDashboard';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
        <WeatherDashboard />
      </div>
    </WeatherProvider>
  );
}

export default App;