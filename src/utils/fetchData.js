import axios from "axios";

axios.defaults.baseURL = "https://api.thecatapi.com/v1/";
axios.defaults.headers.common["X-RapidAPI-Key"] = import.meta.env.VITE_API_KEY;

export const getData = async (url, params) => {
  try {
    const response = await axios.request(url, params);
    return response;
  } catch (error) {
    console.error(error);
  }
};
