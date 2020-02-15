// Still under creating.. there's an issue with react-test-renderer -- fuck --

import { getByTestId } from "@testing-library/react";
import renderer from "react-test-renderer";
import PaginationUI from "../components/blog/PaginationUI";

describe("Next,Prev, first and last page functions", () => {
  it("Go to the next page correctly", () => {
    const component = renderer.create(
      <PaginationUI currentPage="5"></PaginationUI>
    );
    const instance = component.root;
    const next = instance.getByTestId("next");
    next.props.changePage();
    expect(instance.props.currentPage).toBe(6);
  });
});
