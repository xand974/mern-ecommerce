import axios from "axios";

const BaseURL = "http://localhost:3001/api/v1";
export const publicRequest = axios.create({ baseURL: BaseURL });
export const privateRequest = axios.create({
  baseURL: BaseURL,
  headers: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjp0cnVlLCJfaWQiOiI2MTYwMDlhOGRhNTU2NzU2NzY0NDc2ZmIiLCJpYXQiOjE2MzQwMzAxMDAsImV4cCI6MTYzNDExNjUwMH0.K32XN9hFyIruaVYrZ3fIeYL1Y7E315LDhbzx-lmdV5E",
  },
});
