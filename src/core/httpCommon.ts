import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "Content-type": "application/json",
    "X-Access-Token": process.env.REACT_APP_TOKEN!,
  },
});

export default instance;
