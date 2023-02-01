const GEO_API_KEY = "41f2407329msh446a0f96b241007p1e1b44jsn8123e0b42a13";
const GEO_API_HOST = "wft-geo-db.p.rapidapi.com";
export const WEATHER_API_KEY = "9ad1336a393d8da13d0d523979ee1570";
const WEATHER_API_HOST = "api.openweathermap.org/data/2.5";

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": GEO_API_KEY,
    "X-RapidAPI-Host": GEO_API_HOST,
  },
};

export const GEO_API_BASE_URL = `https://${GEO_API_HOST}/v1/geo`;

export const WEATHER_API_BASE_URL = `https://${WEATHER_API_HOST}`;
