import axios from "axios";
const BaseURL = "http://localhost:3001/api/v1";
export const publicRequest = axios.create({ baseURL: BaseURL });
export const privateRequest = axios.create(
  { baseURL: BaseURL },
  {
    Headers: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjp0cnVlLCJfaWQiOiI2MTVmMDAxOGM5OTEwMWE1MWYwZDMxMzUiLCJpYXQiOjE2MzM4ODYyMzQsImV4cCI6MTYzMzk3MjYzNH0.EJ9TFs3rjEvV8sfFAyZp7ZeM5MNgt_4iAJgUjzcFixc",
    },
  }
);
