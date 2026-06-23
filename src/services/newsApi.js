import axios from "axios";

const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

export const fetchNews = async (category) => {
  console.log("API KEY:", API_KEY);

  const response = await axios.get(
    `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&apikey=${API_KEY}`
  );

  console.log(response.data);

  return response.data.articles;
};