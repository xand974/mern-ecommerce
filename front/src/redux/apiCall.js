import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "./productSlice";
import api from "api";

export const fetchProducts = async (cat, dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const res = cat
      ? await api.get(`/products/all?category=${cat}`, {
          headers: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjp0cnVlLCJfaWQiOiI2MTVmMDAxOGM5OTEwMWE1MWYwZDMxMzUiLCJpYXQiOjE2MzM4ODYyMzQsImV4cCI6MTYzMzk3MjYzNH0.EJ9TFs3rjEvV8sfFAyZp7ZeM5MNgt_4iAJgUjzcFixc",
          },
        })
      : await api.get("/products/all", {
          headers: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjp0cnVlLCJfaWQiOiI2MTVmMDAxOGM5OTEwMWE1MWYwZDMxMzUiLCJpYXQiOjE2MzM4ODYyMzQsImV4cCI6MTYzMzk3MjYzNH0.EJ9TFs3rjEvV8sfFAyZp7ZeM5MNgt_4iAJgUjzcFixc",
          },
        });
    dispatch(fetchProductsSuccess(res.data));
  } catch (err) {
    dispatch(fetchProductsFailure());
  }
};
