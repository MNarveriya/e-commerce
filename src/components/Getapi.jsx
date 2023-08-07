import axios from "axios";

export const Getapifun = () => {
  return axios.get("https://dummyjson.com/products/");

 };
export const Getapiproductindivisual = (id) => {
  return axios.get("https://dummyjson.com/products/" + id);

 };