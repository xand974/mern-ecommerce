import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "./productSlice";
import { privateRequest, publicRequest } from "api";
import { loginFailure, loginStart, loginSuccess, resetAuth } from "./userSlice";
import {
  sendCartError,
  sendCartStart,
  sendCartSuccess,
  resetCart,
} from "./cartSlice";

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

export const register = async (user, dispatch) => {
  try {
    await publicRequest.post("/auth/register", user);
  } catch (err) {
    throw err;
  }
};

export const sendCart = async (cart, dispatch) => {
  dispatch(sendCartStart());
  try {
    await privateRequest.post("/carts/add", cart);
    dispatch(sendCartSuccess());
  } catch (err) {
    dispatch(sendCartError());
  }
};

export const sendOrder = async (order) => {
  try {
    await privateRequest.post("/orders/add", order);
  } catch (err) {
    throw err;
  }
};

export const logOut = (dispatch) => {
  dispatch(resetAuth());
  dispatch(resetCart());
};
