import React from "react";
import { mount } from "enzyme";
import PaginationUI from "../components/blog/PaginationUI";
import paginate from "../utils/paginate";

describe("PaginationUI use paginate function and renders correctly", () => {
  const fakePosts = [
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
  ];

  jest.spyOn(paginate, "getPages");

  it("calls paginate function correctly", () => {
    const component = mount(
      <PaginationUI
        posts={fakePosts}
        numberPerPage={6}
        currentPage={0}
      ></PaginationUI>
    );

    // The paginate function is called one time
    expect(paginate.getPages.mock.calls.length).toBe(1);

    // The first argument of the first call of this function was fakePosts
    expect(paginate.getPages.mock.calls[0][0]).toBe(fakePosts);

    // It's clear!
    expect(paginate.getPages).toHaveBeenCalledWith(fakePosts, 6);

    expect(component).toMatchSnapshot();
    paginate.getPages.mockClear();
    component.unmount();
  });
});
