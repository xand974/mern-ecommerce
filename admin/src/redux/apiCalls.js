import { loginStart, loginSuccess, loginFailure } from "./authSlice";
import { adminRequest, userRequest } from "api";
import {
  fetchUsersError,
  fetchUsersStart,
  fetchUsersStatsError,
  fetchUsersStatsSuccess,
  fetchUsersSuccess,
} from "./userSlice";
import { fetchProductsStart, fetchProductsSuccess } from "./productSlice";
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
