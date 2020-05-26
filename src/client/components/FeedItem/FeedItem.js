import React from "react";
import PropTypes from "prop-types";
import "./FeedItem.scss";

function FeedItem(props) {
  return (
    <div className="feed-item-container">
      <div className="feed-item-element-wrapper">
        <div className="feed-wrapper-item">1</div>
        <img
          className="feed-wrapper-item upvote-image"
          src="https://news.ycombinator.com/grayarrow.gif"
          alt="upvote"
        />
        <div className="feed-wrapper-item">This is title</div>
        <div className="feed-wrapper-item">link</div>
        <div className="feed-wrapper-item">by</div>
        <div className="feed-wrapper-item">time</div>
        <div className="feed-wrapper-item">hide</div>
      </div>
    </div>
  );
}

FeedItem.propTypes = {};

export default FeedItem;
