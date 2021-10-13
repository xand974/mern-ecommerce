import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "./productSlice";
import { publicRequest } from "api";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
} from "./userSlice";

export const fetchProducts = async (cat, dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const res = cat
      ? await publicRequest.get(`/products/all?category=${cat}`)
      : await publicRequest.get("/products/all");
    dispatch(fetchProductsSuccess(res.data));
  } catch (err) {
    dispatch(fetchProductsFailure());
  }
};

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (user, dispatch, history) => {
  dispatch(registerStart());
  try {
    await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess());
    history.push("/login");
  } catch (err) {
    dispatch(loginFailure());
  }
};
