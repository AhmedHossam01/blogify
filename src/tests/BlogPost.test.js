import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import BlogPost from "../components/Blog/BlogPost";

describe("BlogPost component", () => {
  it("should render with assigned data", () => {
    const fakePost = {
      title: "Lorem Ipsum",
      id: 2,
      body: "Lorem Ipsum Ist dolor sit"
    };

    act(() => {
      const container = document.createElement("div");
      render(
        <BlogPost
          key={fakePost.id}
          title={fakePost.title}
          body={fakePost.body}
        ></BlogPost>,
        container
      );
      expect(container.querySelector(".card-title").textContent).toBe(
        fakePost.title
      );

      expect(container.querySelector(".card-text").textContent).toBe(
        fakePost.body
      );
    });
  });
});
