export function transformCurrentWeather(data) {
  return {
    city: data.name,
    temp: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    windSpeed: data.wind.speed,
    description: data.weather[0].description,
    icon: data.weather[0].icon
  };
}

export function transformForecast(list) {
  return list
    .filter((item, index) => index % 8 === 0)
    .map(item => ({
      date: item.dt * 1000,
      temp: item.main.temp,
      tempMin: item.main.temp_min,
      tempMax: item.main.temp_max,
      description: item.weather[0].description,
      icon: item.weather[0].icon
    }));
}