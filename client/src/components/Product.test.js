/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Product from "./Product";
import userEvent from "@testing-library/user-event";

test("has h3 containing title passed as props", () => {
  const product = { title: "iPad Air" };
  render(<Product {...product} />);
  const heading = screen.getByRole("heading", {
    name: "iPad Air",
    level: 3,
  });
  expect(heading).toBeInTheDocument();
});

test("onDelete function from props called when clicking delete product button", async () => {
  const mockFn = jest.fn();
  render(<Product onDelete={mockFn} />);
  const button = screen.getByRole("button", { name: "X" });
  const user = userEvent.setup();
  await user.click(button);
  expect(mockFn.mock.calls.length).toBe(1);
});

test("edit form rendered when user clicks the edit button", async () => {
  render(<Product />);
  const button = screen.getByRole("button", { name: "Edit" });
  const user = userEvent.setup();
  await user.click(button);
  const heading = screen.getByRole("heading", {
    level: 3,
    name: /Edit Product/,
  });
  expect(heading).toBeInTheDocument();
});
