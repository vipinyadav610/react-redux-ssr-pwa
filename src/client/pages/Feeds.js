import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchFeeds } from "../redux/actions/Feeds";
import Spinner from "../components/Spinner/Spinner";
import FeedItem from "../components/FeedItem/FeedItem";
import Pagination from "../components/Pagination/Pagination";
import { getItem, setItem } from "../utils/storage";

function Feeds(props) {
  const pageno = props.match.params.pageno;

  const [hideArr, setHide] = useState(
    getItem("hide-feeds") ? JSON.parse(getItem("hide-feeds")) : []
  );
  useEffect(() => {
    return props.fetchFeeds(pageno);
  }, [pageno]);

  const handleHide = (id) => {
    const hideFeeds = getItem("hide-feeds")
      ? JSON.parse(getItem("hide-feeds"))
      : [];
    setItem("hide-feeds", JSON.stringify([...hideFeeds, id]));
    setHide([...hideFeeds, id]);
  };

  return (
    <div>
      <Spinner loading={props.loading}>
        <div>
          {props.feeds.map(
            ({
              title,
              num_comments,
              author,
              points,
              url,
              created_at,
              objectID,
            }) => {
              if (hideArr.includes(objectID)) return null;
              return (
                <FeedItem
                  handleHide={handleHide}
                  key={title}
                  title={title}
                  num_comments={num_comments}
                  author={author}
                  points={points}
                  url={url}
                  created_at={created_at}
                  id={objectID}
                />
              );
            }
          )}
        </div>
      </Spinner>
      {!!props.totalPages && (
        <Pagination
          totalPages={props.totalPages}
          currentPage={!isNaN(pageno) ? pageno : 1}
        />
      )}
    </div>
  );
}

Feeds.loadData = (store, match) => {
  return store.dispatch(fetchFeeds(match.params.pageno));
};
const mapStateToProps = (state) => ({
  feeds: state.feeds.feeds,
  loading: state.feeds.loading,
  totalPages: state.feeds.totalPages,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeeds(pageno) {
      dispatch(fetchFeeds(pageno));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Feeds));
