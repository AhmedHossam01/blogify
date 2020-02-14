import { paginate, getPages } from "../utils/paginate";

describe("paginate function", () => {
  it("do pagination", () => {
    const posts = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15"
    ];
    const expectedRes1 = ["1", "2", "3", "4", "5", "6"];
    const expectedRes2 = ["7", "8", "9", "10", "11", "12"];
    const expectedRes3 = ["13", "14", "15"];

    expect(paginate(posts, 0)).toEqual(expectedRes1);
    expect(paginate(posts, 1)).toEqual(expectedRes2);
    expect(paginate(posts, 2)).toEqual(expectedRes3);

    expect(getPages(posts)).toEqual([0, 1, 2]);
  });
});
