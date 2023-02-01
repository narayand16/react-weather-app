import "./current-weather.css";
import { getWeatherDetails } from "../../util/util";

const CurrentWeather = ({ data }) => {
  const weatherData = getWeatherDetails(data).slice(0, 4);

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        ></img>
      </div>
      <div className="bottom">
        <p className="temperature"> {Math.round(data.main.temp)}°C</p>
        <div className="details">
          {weatherData &&
            weatherData.map((weather, index) => (
              <div className="row" key={index}>
                <span className="label">{weather.label}</span>
                <span className="value">{weather.value}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
