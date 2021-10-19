import axios from "axios";

const BaseURL = "http://localhost:3001/api/v1";
let TOKEN;

//#region CHECK TOKEN
const checkLocalStorage = () => {
  if (JSON.parse(localStorage.getItem("persist:root")) === null) {
    TOKEN = "";
  } else {
    TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
      .currentUser?.accessToken;
  }
};

//#endregion

checkLocalStorage();

export const publicRequest = axios.create({ baseURL: BaseURL });
export const privateRequest = axios.create({
  baseURL: BaseURL,
  headers: {
    token: TOKEN,
  },
});
