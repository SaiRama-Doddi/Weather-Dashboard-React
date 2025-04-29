function WeatherCard({ weather, unit, toggleUnit }) {
    if (!weather) return null;
  
    const temp = unit === 'C' 
      ? (weather.main.temp - 273.15).toFixed(1)
      : ((weather.main.temp - 273.15) * 9/5 + 32).toFixed(1);
  
    return (
      <div className="weather-card">
        <h2>{weather.name}, {weather.sys.country}</h2>
        <h3>{temp}°{unit}</h3>
        <p>{weather.weather[0].description}</p>
        <img 
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Weather Icon"
        />
        <button onClick={toggleUnit}>
          Show in °{unit === 'C' ? 'F' : 'C'}
        </button>
      </div>
    );
  }
  
  export default WeatherCard;
  