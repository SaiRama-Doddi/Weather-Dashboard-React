const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchCurrentWeather(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
  if (!res.ok) throw new Error('City not found');
  return res.json();
}

export async function fetchForecast(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
  );
  if (!res.ok) throw new Error('Forecast fetch failed');
  return res.json();
}
