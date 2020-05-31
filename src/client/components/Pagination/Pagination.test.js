import React from "react";
import { shallow } from "enzyme";
import Pagination from "./Pagination";

function setup() {
  const props = {
    totalPages: 50,
    currentPage: 2,
    pageNeighbours: 2,
  };
  const wrapper = shallow(<Pagination {...props} />);
  return { wrapper, props };
}

describe("Pagination Component", () => {
  const props = {
    totalPages: 50,
    currentPage: 2,
    pageNeighbours: 2,
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Pagination {...props} />);
  });

  it("Pagination should render proper number of list items", () => {
    expect(wrapper.find("li")).toHaveLength(2 * props.pageNeighbours + 3);
  });

  it("Pagination should render proper number of NavLinks", () => {
    expect(wrapper.find("NavLink")).toHaveLength(2 * props.pageNeighbours + 1);
  });

  it("Pagination should have Previous and Next Link", () => {
    expect(wrapper.find("Link")).toHaveLength(2);
  });

  it("Pagination should have proper aria label of nav", () => {
    expect(wrapper.find("nav").props()["aria-label"]).toBe("Feeds Pagination");
  });

  it("Previous Link should have proper navigation url", () => {
    expect(wrapper.find("Link").at(0).props()["to"]).toBe(
      `/feeds/${props.currentPage - 1}`
    );
  });

  it("Next Link should have proper navigation url", () => {
    expect(wrapper.find("Link").at(1).props()["to"]).toBe(
      `/feeds/${props.currentPage + 1}`
    );
  });
});
