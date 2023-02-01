export const getWeatherDetails = (data) => {
  return [
    {
      label: "Feels like",
      value: `${Math.round(data.main.feels_like)}°C`,
    },
    {
      label: "Humidity",
      value: `${data.main.humidity}%`,
    },
    {
      label: "Wind",
      value: `${data.wind.speed} m/s`,
    },
    {
      label: "Pressure",
      value: `${data.main.pressure}hPa`,
    },
    {
      label: "Clouds",
      value: `${data.clouds.all}%`,
    },
    {
      label: "Sea level",
      value: `${data.main.sea_level}m`,
    },
  ];
};

export const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const dayOfWeek = new Date().getDay();
