import { useState } from 'react';
import SearchBar from './Components/Searchbar';
import ErrorMessage from './Components/ErrorMessage';

import WeatherDetail from './Components/WeatherDetail';
import WeatherCard from './Components/Weathercard';
import ForecastList from './Components/Forecastlist';
import './App.css'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [unit, setUnit] = useState('C');
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    try {
      setError('');
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      if (!weatherRes.ok) throw new Error('City not found');
      const weatherData = await weatherRes.json();
      setWeather(weatherData);

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
      );
      const forecastData = await forecastRes.json();
      // Picking one forecast per day
      const dailyForecast = forecastData.list.filter((item) => item.dt_txt.includes("12:00:00"));
      setForecast(dailyForecast);
    } catch (err) {
      console.error(err);
      setError(err.message);
      setWeather(null);
      setForecast([]);
    }
  };

  const toggleUnit = () => {
    setUnit(unit === 'C' ? 'F' : 'C');
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather} />
      <ErrorMessage message={error} />
      <WeatherCard weather={weather} unit={unit} toggleUnit={toggleUnit} />
      <WeatherDetail weather={weather} />
      <ForecastList forecast={forecast} unit={unit} />
    </div>
  );
}

export default App;
