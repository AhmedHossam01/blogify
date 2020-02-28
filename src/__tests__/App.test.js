import React from "react";
// import { render } from "react-dom";
import App from "../App";
// import { act } from "@testing-library/react";
import { shallow } from "enzyme";
import { fetchPosts } from "../utils/services";

jest.mock("../utils/services");

describe("App Component", () => {
  it("calls fetchPosts correctly - 2 times -", () => {
    const component = shallow(<App></App>);
    const instance = component.instance();
    instance.componentDidMount();

    // The fetchPosts function is called one time
    expect(fetchPosts.mock.calls.length).toBe(2);

    console.log(component);
    fetchPosts.mockClear();
  });
});
