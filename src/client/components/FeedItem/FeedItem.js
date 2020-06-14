import React from "react";
import PropTypes, { string } from "prop-types";
import moment from "moment";
import "./FeedItem.scss";
export const getBaseUrl = (url) => {
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
  handleUpVotes,
  votes,
}) {
  return (
    <div className="feed-item-container">
      <div className="feed-item-element-wrapper">
        <div className="feed-wrapper-item-large-fonts">
          <div
            aria-label="votes"
            className="feed-wrapper-item feed-item-points label-black"
          >
            {points + votes}
          </div>
          <div
            aria-label="comments"
            className="feed-wrapper-item item-comments"
          >
            {num_comments}
          </div>
          <div
            aria-label="upvote icon"
            className="upvote-icon"
            onClick={() => handleUpVotes(id)}
          />
          <div aria-label="title" className="feed-wrapper-item label-black">
            {title}
          </div>
        </div>
        <div className="feed-item-small-font">
          {url && (
            <div aria-label="feed link" className="feed-wrapper-item">
              <a target="_blank" href={url} rel="noreferrer">
                ({getBaseUrl(url)})
              </a>
            </div>
          )}
          {author && (
            <div className="feed-wrapper-item ">
              by
              <span aria-label="author name" className="label-black">
                {author}
              </span>
            </div>
          )}
          <div className="feed-wrapper-item">
            {moment(created_at).fromNow()}
          </div>
          <div
            aria-label="hide feed"
            className="feed-wrapper-item btn-hide"
            onClick={() => handleHide(id)}
          >
            [ <span className="label-black">hide</span> ]
          </div>
        </div>
      </div>
    </div>
  );
}

FeedItem.propTypes = {};

export default FeedItem;
