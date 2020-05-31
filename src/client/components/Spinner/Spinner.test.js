import React from "react";
import { shallow } from "enzyme";
import Spinner from "./Spinner";

describe("Spinner Component", () => {
  const props = {
    loading: true,
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Spinner {...props} />);
  });

  it("Should show loading when loading props as true", () => {
    expect(wrapper.find(".spinner").exists()).toBe(true);
  });
});
