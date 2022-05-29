import axios from "axios";
import { store } from "redux/store";

const BaseURL = process.env.REACT_APP_API_URL;

export const publicRequest = axios.create({ baseURL: BaseURL });
const privateRequest = axios.create({
  baseURL: BaseURL,
});

privateRequest.interceptors.request.use(
  (config) => {
    const TOKEN = store.getState().user?.currentUser?.accessToken;
    const auth = TOKEN ? `Bearer ${TOKEN}` : "";
    config.headers.common["authorization"] = auth;
    return config;
  },
  (error) => Promise.reject(error)
);

export { privateRequest };
