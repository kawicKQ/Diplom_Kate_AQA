import request from "superagent";
import dotenv from "dotenv";
dotenv.config();

const BASE_URL_API = process.env.BASE_URL_API || "";

export const api = {
  post: (url: string) => request.post(`${BASE_URL_API}${url}`),
  put: (url: string) => request.put(`${BASE_URL_API}${url}`),
  get: (url: string) => request.get(`${BASE_URL_API}${url}`),
  patch: (url: string) => request.patch(`${BASE_URL_API}${url}`),
  delete: (url: string) => request.delete(`${BASE_URL_API}${url}`),
};
