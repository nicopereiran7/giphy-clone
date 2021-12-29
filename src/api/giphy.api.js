import axios from "./axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getRandomTrendingGif = async (offset) => {
  try {
    const { data: response } = await axios.get(`/trending?api_key=${API_KEY}&limit=8&offset=${offset}`);
    return response.data;
  }catch(e) {
    console.log(e);
  }
}

// https://api.giphy.com/v1/gifs/categories/search/sport?
export const getGifByCategory = async (category, offset = 0) => {
  try {
    const response = await axios.get(`/categories/search/${category}?api_key=${API_KEY}&limit=20&offset=${offset}`);
    return response;
  }catch(e) {
    console.log(e);
  }
}

// http://api.giphy.com/v1/gifs/categories
export const getCatetgories = async () => {
  try {
    const response = await axios.get(`/categories?api_key=${API_KEY}`);
    return response;
  }catch(e) {
    console.log(e);
  }
}

