import axios from 'axios';
import { BASE_URL } from './constants';

export const fetchArticles = async topic => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
  });
  const apiParams = {
    query: encodeURIComponent(topic),
  };
  const endPoint = `/search?${new URLSearchParams(apiParams).toString()}`;

  const response = await axiosInstance.get(endPoint);
  return response.data.hits;
};
