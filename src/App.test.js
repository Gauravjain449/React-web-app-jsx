import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Posts from "./components/Posts";

describe("App Component", () => {
  const wrapper = shallow(<App />);

  it("should render Posts Component", () => {
    const element = wrapper.find(Posts);
    expect(element).toExist();
  });
});
