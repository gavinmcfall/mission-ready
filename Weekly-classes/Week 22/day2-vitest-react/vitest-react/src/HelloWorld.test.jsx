import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";
import { describe, test } from "vitest";

describe("HelloWorld", () => {
  test("h1 text renders correctly", () => {
    render(<HelloWorld />);
    const headingHelement = screen.getByText(/hello, world!/i);
    expect(headingHelement).toBeInTheDocument();
  });
});
