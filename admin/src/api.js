import axios from "axios";

const BASEURL = "http://localhost:3001/api/v1";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.auth)
  ?.currentUser?.accessToken;

export const adminRequest = axios.create({
  baseURL: BASEURL,
  headers: {
    token: TOKEN,
  },
});

export const userRequest = axios.create({
  baseURL: BASEURL,
});
