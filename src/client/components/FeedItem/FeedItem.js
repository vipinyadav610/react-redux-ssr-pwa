import React from "react";
import PropTypes, { string } from "prop-types";
import moment from "moment";
import "./FeedItem.scss";
const getBaseUrl = (url) => {
  let baseUrl = "";
  if (url && typeof url === "string") {
    const splitedUrl = url.split("/");
    if (splitedUrl.length > 2) {
      baseUrl = splitedUrl[2].replace(/(^\w+:|^)\/\//, "");
    }
  }
  return baseUrl;
};
function FeedItem({
  num_comments,
  title,
  author,
  created_at,
  id,
  url,
  points,
  handleHide,
}) {
  return (
    <div className="feed-item-container">
      <div className="feed-item-element-wrapper">
        <div className="feed-wrapper-item feed-item-points label-black">
          {points}
        </div>
        <div className="feed-wrapper-item">{num_comments}</div>
        <img
          className="feed-wrapper-item upvote-image"
          src="https://news.ycombinator.com/grayarrow.gif"
          alt="upvote"
        />
        <div className="feed-wrapper-item label-black">{title}</div>
        {url && (
          <div className="feed-wrapper-item feed-item-small-font">
            <a target="_blank" href={url}>
              ({getBaseUrl(url)})
            </a>
          </div>
        )}
        {author && (
          <div className="feed-wrapper-item feed-item-small-font">
            by <span className="label-black">{author}</span>
          </div>
        )}
        <div className="feed-wrapper-item feed-item-small-font">
          {moment(created_at).fromNow()}
        </div>
        <div
          className="feed-wrapper-item feed-item-small-font btn-hide"
          onClick={() => handleHide(id)}
        >
          [ <span className="label-black">hide</span> ]
        </div>
      </div>
    </div>
  );
}

FeedItem.propTypes = {};

export default FeedItem;