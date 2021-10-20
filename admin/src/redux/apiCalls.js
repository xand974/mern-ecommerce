import { loginStart, loginSuccess, loginFailure } from "./authSlice";
import { adminRequest, userRequest } from "api";
import {
  createUserError,
  createUserStart,
  createUserSuccess,
  deleteUserError,
  deleteUserStart,
  deleteUserSuccess,
  fetchUsersError,
  fetchUsersStart,
  fetchUsersStatsError,
  fetchUsersStatsSuccess,
  fetchUsersSuccess,
  updateUserError,
  updateUserStart,
  updateUserSuccess,
} from "./userSlice";
import {
  addProductError,
  addProductStart,
  addProductSuccess,
  deleteProductError,
  deleteProductStart,
  deleteProductSuccess,
  fetchProductsStart,
  fetchProductsSuccess,
  updateProductError,
  updateProductStart,
  updateProductSuccess,
} from "./productSlice";
import {
  fetchOrdersError,
  fetchOrdersStart,
  fetchOrdersSuccess,
} from "./orderReducer";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await userRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const fetchUsers = async (dispatch, newQuery) => {
  dispatch(fetchUsersStart());
  try {
    const res = newQuery
      ? await adminRequest.get("/users/all?new=true")
      : await adminRequest.get("/users/all");
    dispatch(fetchUsersSuccess(res.data));
  } catch (err) {
    dispatch(fetchUsersError());
  }
};

export const fetchProducts = async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const res = await adminRequest.get("/products/all");
    dispatch(fetchProductsSuccess(res.data));
  } catch (err) {
    dispatch(fetchUsersError());
  }
};

export const fetchUsersStats = async (dispatch, setUserStats, MONTHS) => {
  dispatch(fetchUsersStart());
  try {
    const res = await adminRequest.get("/users/stats");
    const statList = res.data.sort((a, b) => {
      return a._id - b._id;
    });

    statList
      .filter((s) => {
        return s._id !== undefined || s._id !== MONTHS[s._id - 1];
      })
      .map((stat) => {
        return setUserStats((prev) => {
          return [...prev, { name: MONTHS[stat._id - 1], Users: stat.total }];
        });
      });
    console.log(statList);
    dispatch(fetchUsersStatsSuccess(statList));
  } catch (err) {
    dispatch(fetchUsersStatsError());
  }
};

export const fetchOrders = async (dispatch) => {
  dispatch(fetchOrdersStart());
  try {
    const res = await adminRequest.get("/orders/all");
    dispatch(fetchOrdersSuccess(res.data));
  } catch (err) {
    dispatch(fetchOrdersError());
  }
};
export const updateUser = async (dispatch, id, user) => {
  dispatch(updateUserStart());
  try {
    await adminRequest.put(`/users/${id}`, user);
    dispatch(updateUserSuccess(id));
  } catch (err) {
    dispatch(updateUserError());
  }
};

export const deleteUser = async (dispatch, id) => {
  dispatch(deleteUserStart());
  try {
    await adminRequest.delete(`/users/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserError());
  }
};

export const createUser = async (dispatch, user) => {
  dispatch(createUserStart());
  try {
    const res = await adminRequest.post("/users/add", user);
    dispatch(createUserSuccess(res.data));
  } catch (err) {
    dispatch(createUserError());
  }
};

export const addProduct = async (dispatch, product) => {
  dispatch(addProductStart());
  try {
    const res = await adminRequest.post("/products/add", product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductError());
  }
};

export const updateProduct = async (dispatch, id, product) => {
  dispatch(updateProductStart());
  try {
    await adminRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess(id));
  } catch (err) {
    dispatch(updateProductError());
  }
};

export const deleteProduct = async (dispatch, id) => {
  dispatch(deleteProductStart());
  try {
    await adminRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductError());
  }
};
