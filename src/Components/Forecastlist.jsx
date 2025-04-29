function ForecastList({ forecast, unit }) {
    if (!forecast) return null;
  
    return (
      <div className="forecast-list">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-item">
            <p className="forecast-date">{new Date(day.dt_txt).toLocaleDateString()}</p>
  
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt="Forecast Icon"
              className="forecast-icon"
            />
  
            <p className="forecast-temp">
              {unit === 'C' 
                ? (day.main.temp - 273.15).toFixed(1)
                : ((day.main.temp - 273.15) * 9/5 + 32).toFixed(1)}°{unit}
            </p>
  
            <p className="forecast-description">{day.weather[0].description}</p>
  
            <p className="forecast-wind">Wind: {day.wind.speed} m/s</p>
            <p className="forecast-wind">Pressure: {day.main.pressure} hpa</p>
            <p className="forecast-wind">Pressure: {day.main.humidity} %</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default ForecastList;
  