import "./App.css";
import Search from "./components/search/search";
import Forecast from "./components/forecast/forecast";
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_KEY, WEATHER_API_BASE_URL } from "./api-config";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const searchChangeHandler = (searchQuery) => {
    const [latitude, longitude] = searchQuery.value.split(" ");
    const currentWeatherFetch = fetch(
      `${WEATHER_API_BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const currentWeatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({
          city: searchQuery.label,
          ...currentWeatherResponse,
        });
        setForecast({ city: searchQuery.label, ...forecastResponse });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container">
      <Search onSearchChange={searchChangeHandler} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
