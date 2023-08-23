import axios from "axios";

axios.defaults.baseURL = "https://api.thecatapi.com/v1/";
axios.defaults.headers.common["X-RapidAPI-Key"] = import.meta.env.VITE_API_KEY;

export const getOneImage = async (url) => {
  try {
    const response = await axios.request(url);
    return response;
  } catch (error) {
    console.error(error);
  }
};
