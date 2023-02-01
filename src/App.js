import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_BASE_URL } from "./service/api-handler";
import API_CONFIG from "./api-config";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const searchChangeHandler = (searchQuery) => {
    const [latitude, longitude] = searchQuery.value.split(" ");
    const currentWeatherFetch = fetch(
      `${WEATHER_API_BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_CONFIG.WEATHER_API_KEY}`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${API_CONFIG.WEATHER_API_KEY}`
    );
    Promise.all([currentWeatherFetch, forecastFetch]).then(async (response) => {
      const currentWeatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
      setCurrentWeather({ city: searchQuery.label, ...currentWeatherResponse });
      setForecast({ city: searchQuery.label, ...forecastResponse });
    });
  };
  console.log(currentWeather, forecast);
  return (
    <div className="container">
      <Search onSearchChange={searchChangeHandler} />
      <CurrentWeather />
    </div>
  );
}

export default App;
