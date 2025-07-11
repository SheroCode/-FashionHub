import axios from "axios";
export const axiosInterceptors = axios.create({
  baseURL: "https://dummyjson.com/",
});
