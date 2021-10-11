import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "./productSlice";
import { privateRequest, publicRequest } from "api";

export const fetchProducts = async (cat, dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const res = cat
      ? await privateRequest.get(`/products/all?category=${cat}`)
      : await privateRequest.get("/products/all");
    dispatch(fetchProductsSuccess(res.data));
  } catch (err) {
    dispatch(fetchProductsFailure());
  }
};
