import axios from "axios";

const BaseURL = "http://localhost:3001/api/v1";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
  .currentUser.accessToken;

export const publicRequest = axios.create({ baseURL: BaseURL });
export const privateRequest = axios.create({
  baseURL: BaseURL,
  headers: {
    token: TOKEN,
  },
});
