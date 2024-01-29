import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_DB_API,
    language: "ko-KR",
  },
});

export default instance;
