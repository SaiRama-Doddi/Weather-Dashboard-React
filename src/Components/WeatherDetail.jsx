function WeatherDetail({ weather }) {
    if (!weather) return null;

    return (
      <div className="weather-detail">
        <h3>Weather Details</h3>
        <div className="weather-item">
          <p><span>Humidity:</span> {weather.main.humidity}%</p>
        </div>
        <div className="weather-item wind-speed">
          <p><span>Wind Speed:</span> {weather.wind.speed} m/s</p>
        </div>
        <div className="weather-item pressure">
          <p><span>Pressure:</span> {weather.main.pressure} hPa</p>
        </div>
        <div className="weather-item highlight temperature">
          <p><span>Temperature:</span> {weather.main.temp}°C</p>
        </div>
      </div>
    );
}

export default WeatherDetail;
