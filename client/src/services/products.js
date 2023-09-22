import axios from "axios";

export const getProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data;
};

export const deleteProduct = async (productId) => {
  await axios.delete(`/api/products/${productId}`);
};

export const createProduct = async (newProduct) => {
  const { data } = await axios.post("/api/products", newProduct);
  return data;
};

export const editProduct = async (productId, updates) => {
  const { data } = await axios.put(`/api/products/${productId}`, updates);
  return data;
};
