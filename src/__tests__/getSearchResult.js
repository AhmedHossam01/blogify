import { getSearchResult } from "../utils/queries";

describe("function to get search result", () => {
  it("should return search result given array of posts and query", () => {
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

    expect(getSearchResult(fakePosts, "qui est esse")).toEqual([
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
          "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      }
    ]);
  });
});
