import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Mumbai</p>
          <p className="weather-description">sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/some.png"></img>
      </div>
      <div className="bottom">
        <p className="temperature"> 20C</p>
        <div className="details">
          <div className="row">
          <p className="label">Feels like</p>
          <p className="value">22C</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
