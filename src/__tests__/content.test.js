import React from "react";
import { render, cleanup } from "@testing-library/react";
import Content from "../components/layout/Content";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../utils/paginate", () => {
  return {
    getPages: jest.fn(() => [0, 1]),
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

describe("Content Component", () => {
  it("should display error message when appState is error", () => {
    const { container } = render(
      <Content appState={"error"} errorMessage={"error 404"}></Content>
    );

    expect(container).toHaveTextContent(/error 404/i);

    cleanup();
  });

  it("should display no posts when there's empty posts passed and success state", () => {
    const { container } = render(
      <Content appState={"success"} posts={[]}></Content>
    );

    expect(container).toHaveTextContent(/no posts/i);

    cleanup();
  });

  it("should display real ouput when there's posts", () => {
    const { container } = render(
      <Content appState={"success"} posts={["fake"]}></Content>
    );

    expect(container).toHaveTextContent(
      /sunt aut facere repellat provident occaecati excepturi optio reprehenderit/i
    );

    expect(container).toHaveTextContent(
      /est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores neque/i
    );

    cleanup();
  });
});