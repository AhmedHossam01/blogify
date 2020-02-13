import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import BlogPost from "../components/Blog/BlogPost";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render with assigned data", () => {
  const fakePost = {
    title: "Lorem Ipsum",
    id: 2,
    body: "Lorem Ipsum Ist dolor sit"
  };

  act(() => {
    render(
      <BlogPost
        key={fakePost.id}
        title={fakePost.title}
        body={fakePost.body}
      ></BlogPost>,
      container
    );
  });
  expect(document.querySelector(".card-title").textContent).toBe(
    fakePost.title
  );
  expect(document.querySelector(".card-text").textContent).toBe(fakePost.body);
});
