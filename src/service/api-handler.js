import API_CONFIG from "../api-config";

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_CONFIG.GEO_API_KEY,
    "X-RapidAPI-Host": API_CONFIG.GEO_API_HOST,
  },
};

export const GEO_API_BASE_URL = `https://${API_CONFIG.GEO_API_HOST}/v1/geo`;

export const WEATHER_API_BASE_URL = `https://${API_CONFIG.WEATHER_API_HOST}`

// export const getCities = async (searchParam) => { // TODO:
//   try {
//     const responseJson = await fetch(
//       `${GEO_API_BASE_URL}/cities?namePrefix=${searchParam}`,
//       geoApiOptions
//     );
//     console.log(await (await responseJson.json()));
//     return await (await responseJson.json());
//   } catch (err) {
//     console.error(err);
//   }
// };
