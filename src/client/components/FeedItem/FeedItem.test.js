import React from "react";
import { shallow } from "enzyme";
import FeedItem, { getBaseUrl } from "./FeedItem";

describe("FeedItem Component", () => {
  const upVoteHandler = jest.fn();
  const hideHandler = jest.fn();
  const props = {
    num_comments: 50,
    title: "This is feed item title",
    author: "vipin",
    created_at: "2018-06-05T14:48:19.000Z",
    id: 1,
    url:
      "http://finance.yahoo.com/news/Steve-Jobs-Resigns-as-CEO-of-bw-19285464.html?x=0&.v=1",
    points: 10,
    handleHide: hideHandler,
    handleUpVotes: upVoteHandler,
    votes: 10,
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FeedItem {...props} />);
  });

  it("FeedItem Should populate proper comments", () => {
    expect(wrapper.find('div[aria-label="comments"]').text()).toBe(
      `${props.num_comments}`
    );
  });

  it("FeedItem Should populate proper votes", () => {
    expect(wrapper.find('div[aria-label="votes"]').text()).toBe(
      `${props.points + props.votes}`
    );
  });

  it("Should invoke votes icon click once", () => {
    wrapper.find('div[aria-label="upvote icon"]').props().onClick();
    expect(upVoteHandler.mock.calls.length).toEqual(1);
  });

  it("Should invoke votes icon click with argument", () => {
    wrapper.find('div[aria-label="upvote icon"]').props().onClick();
    expect(upVoteHandler).toHaveBeenCalledWith(props.id);
  });

  it("FeedItem Should populate proper title", () => {
    expect(wrapper.find('div[aria-label="title"]').text()).toBe(props.title);
  });

  it("Should populate proper link url of feed", () => {
    expect(wrapper.find('div[aria-label="feed link"] a').props()["href"]).toBe(
      props.url
    );
  });

  it("Should populate proper link text", () => {
    expect(wrapper.find('div[aria-label="feed link"] a').text()).toBe(
      `(${getBaseUrl(props.url)})`
    );
  });

  it("Should populate proper author name", () => {
    expect(wrapper.find('span[aria-label="author name"]').text()).toBe(
      props.author
    );
  });

  it("Should invoke hide click once", () => {
    wrapper.find('div[aria-label="hide feed"]').props().onClick();
    expect(hideHandler.mock.calls.length).toEqual(1);
  });

  it("Should invoke hide click with argument", () => {
    wrapper.find('div[aria-label="hide feed"]').props().onClick();
    expect(hideHandler).toHaveBeenCalledWith(props.id);
  });
});
