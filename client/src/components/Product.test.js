/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Product from "./Product";

test("has h3 containing title passed as props", () => {
  const product = { title: "iPad Air" };
  render(<Product {...product} />);
  const heading = screen.getByRole("heading", {
    name: "iPad Air",
    level: 3,
  });

  expect(heading).toBeInTheDocument();
});
