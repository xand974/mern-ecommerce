import axios from "axios";

let TOKEN;
//#region CHECK TOKEN
const checkTokenLocalStorage = () => {
  if (JSON.parse(localStorage.getItem("persist:root")) === null) {
    TOKEN = "";
  } else {
    TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.auth)
      .currentUser?.accessToken;
  }
};
//#endregion
checkTokenLocalStorage();

const BASEURL = "http://localhost:3001/api/v1";

export const adminRequest = axios.create({
  baseURL: BASEURL,
  headers: {
    token: TOKEN,
  },
});

export const userRequest = axios.create({
  baseURL: BASEURL,
});
