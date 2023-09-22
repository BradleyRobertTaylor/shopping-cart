import axios from "axios";

export const getCartItems = async () => {
  const { data } = await axios.get("/api/cart");
  return data;
};

export const addProductToCart = async (productId) => {
  const { data } = await axios.post("/api/add-to-cart", { productId });
  return data;
};

export const checkoutCart = async () => {
  const { data } = axios.post("/api/checkout");
  return data;
};
