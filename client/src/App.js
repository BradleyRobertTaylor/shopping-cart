import { useEffect, useState } from "react";
import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getProducts,
} from "./services/products";
import { addProductToCart, checkoutCart, getCartItems } from "./services/cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProductsAndCartItems = async () => {
      const products = await getProducts();
      const cart = await getCartItems();
      setProducts(products);
      setCartItems(cart);
    };

    fetchProductsAndCartItems();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);
      setProducts(products.filter(({ _id }) => _id.toString() !== productId));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (newProduct, callback) => {
    try {
      const data = await createProduct(newProduct);
      setProducts([...products, data]);
      if (callback) {
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddToCart = async (id) => {
    try {
      await addProductToCart(id);
      setProducts(
        products.map((item) => {
          if (item._id == id) {
            item.quantity -= 1;
          }
          return item;
        })
      );

      const cart = await getCartItems();
      setCartItems(cart);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckout = async () => {
    try {
      await checkoutCart();
      setCartItems([]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditProduct = async (productId, updates, callback) => {
    try {
      const data = await editProduct(productId, updates);
      setProducts(
        products.map((productItem) => {
          if (productItem._id === productId) {
            return data;
          } else {
            return productItem;
          }
        })
      );

      if (callback) {
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="app">
      <Header onCheckout={handleCheckout} cartItems={cartItems} />
      <main>
        <ProductList
          products={products}
          onDelete={handleDelete}
          onAddToCart={handleAddToCart}
          onEditProduct={handleEditProduct}
        />
        <AddProductForm onSubmit={handleSubmit} />
      </main>
    </div>
  );
};

export default App;
