import axios from "axios";

axios.defaults.baseURL = "https://api.thecatapi.com/v1/";
axios.defaults.headers.common["x-api-key"] = import.meta.env.VITE_API_KEY;

export const getData = async (url, params) => {
  try {
    const response = await axios.get(url, { params });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const voteOnImage = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const favoriteDelete = async (url) => {
  try {
    const response = await axios.delete(url);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const uploadImage = async (url, data) => {
  try {
    const response = await axios.post(url, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
