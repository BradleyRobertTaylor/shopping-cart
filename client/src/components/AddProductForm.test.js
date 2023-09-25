/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddProductForm from "./AddProductForm";

test("form visible after user clicks button", async () => {
  // detecting that the form is always visible due to the way
  // it's implemented in the CSS
  render(<AddProductForm />);
  const button = screen.getByRole("button", { name: /Add A Product/ });
  const user = userEvent.setup();
  const form = screen.getByRole("form");
  expect(form).not.toBeVisible();
  await user.click(button);
  expect(form).toBeVisible();
});
