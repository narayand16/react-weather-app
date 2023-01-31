import API_CONFIG from "../api-config";

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_CONFIG.API_KEY,
    "X-RapidAPI-Host": API_CONFIG.API_HOST,
  },
};

export const GEO_API_BASE_URL = `https://${API_CONFIG.API_HOST}/v1/geo`;

export const getCities = async (searchParam) => { // TODO:
  try {
    const responseJson = await fetch(
      `${GEO_API_BASE_URL}/cities?namePrefix=${searchParam}`,
      geoApiOptions
    );
    console.log(await (await responseJson.json()));
    return await (await responseJson.json());
  } catch (err) {
    console.error(err);
  }
};
