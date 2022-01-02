import axios from "./axios";
import def_axios from "axios";

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

// http://upload.giphy.com/v1/gifs
export const uploadGif = async (file, tags) => {
  try {
      const response = await def_axios.post(`http://upload.giphy.com/v1/gifs?api_key=${API_KEY}&username=JoeCool3000&tags=${tags.join()}`);
      return response;
  }catch(err) {
    console.log(err)
  }
}
