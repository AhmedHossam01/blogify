import React from "react";
import { render } from "@testing-library/react";
import BlogPost from "../components/blog/BlogPost";

describe("BlogPost component", () => {
  it("should render with assigned data", () => {
    const fakePost = {
      title: "Lorem Ipsum",
      id: 2,
      body: "Lorem Ipsum Ist dolor sit"
    };

    const { container } = render(
      <BlogPost
        title={fakePost.title}
        id={fakePost.id}
        body={fakePost.body}
        author={"fake"}
      ></BlogPost>
    );

    expect(container).toHaveTextContent(
      /Lorem IpsumLorem Ipsum Ist dolor sit/i
    );
  });
});
