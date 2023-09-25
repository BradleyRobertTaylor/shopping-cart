/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { getProducts } from "./services/products";
import App from "./App";
import { getCartItems } from "./services/cart";

jest.mock("./services/cart.js");
jest.mock("./services/products.js");

const products = [
  {
    _id: 1,
    title: "Amazon Kindle E-reader",
    quantity: 5,
    price: 79.99,
  },
  {
    _id: 2,
    title: "Apple 10.5-Inch iPad Pro",
    quantity: 0,
    price: 649.99,
  },
  {
    _id: 3,
    title: "Yamaha Portable Keyboard",
    quantity: 2,
    price: 155.99,
  },
  {
    _id: 4,
    title: "Tinker, Tailor, Soldier, Spy - A John le Carre Novel",
    quantity: 12,
    price: 13.74,
  },
];

const cartItems = [
  {
    _id: "545454f72092473d55a809e1",
    title: "Kindle",
    price: 50,
    quantity: 1,
    productId: "61d754d72092473d55a809e1",
    createdAt: "2020-10-04T05:57:02.777Z",
    updatedAt: "2020-10-04T05:57:02.777Z",
    _v: 0,
  },
  {
    _id: "51d754d72092473333a809e1",
    title: "Mac Mini",
    price: 850,
    quantity: 2,
    productId: "51d754d72092473333a809e1",
    createdAt: "2020-10-04T05:57:02.777Z",
    updatedAt: "2020-10-04T05:57:02.777Z",
    _v: 0,
  },
];

test("h3 rendered with product details", async () => {
  getProducts.mockResolvedValue(products);
  getCartItems.mockResolvedValue(cartItems);
  render(<App />);
  const heading = await screen.findByRole("heading", {
    name: /Yamaha Portable Keyboard/,
    level: 3,
  });
  expect(heading).toBeInTheDocument();
});

test("cart item rendered", async () => {
  getProducts.mockResolvedValue(products);
  getCartItems.mockResolvedValue(cartItems);
  render(<App />);
  const td = await screen.findByRole("cell", {
    name: /Mac Mini/,
  });
  expect(td).toBeInTheDocument();
});
