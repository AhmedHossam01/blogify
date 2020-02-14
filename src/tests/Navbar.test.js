import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Navbar from "../components/layout/Navbar";

describe("Navbar Component", () => {
  const container = document.createElement("div");

  it("should match the snapshot", () => {
    render(<Navbar></Navbar>, container);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
