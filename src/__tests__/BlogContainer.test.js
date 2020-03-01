import React from "react";
import { render, cleanup } from "@testing-library/react";
import BlogContainer from "../components/blog/BlogContainer";
import paginate from "../utils/paginate";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../utils/paginate", () => {
  return {
    getItems: jest.fn(() => [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
          "quia et suscipitsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
          "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      }
    ])
  };
});

describe("Blog container use paginate function and renders correctly", () => {
  it("calls paginate function correctly", () => {
    const { container } = render(
      <BlogContainer
        posts={"fake"}
        numberPerPage={6}
        currentPage={0}
      ></BlogContainer>
    );

    expect(paginate.getItems).toHaveBeenCalledTimes(1);
    expect(paginate.getItems).toHaveBeenCalledWith("fake", 0, 6);

    expect(container).toHaveTextContent(
      /est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores neque/i
    );

    cleanup();
  });
});
