import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchFeeds } from "../redux/actions/Feeds";
import Spinner from "../components/Spinner/Spinner";
import FeedItem from "../components/FeedItem/FeedItem";
import Pagination from "../components/Pagination/Pagination";

function Feeds(props) {
  const pageno = Number(props.match.params.pageno);
  useEffect(() => {
    return props.fetchFeeds(pageno);
  }, [pageno]);
  return (
    <div>
      <Spinner loading={props.loading}>
        <div>
          {props.feeds.map(({ title }) => {
            return <FeedItem key={title} title={title} />;
          })}
        </div>
      </Spinner>
      <Pagination totalPages={50} currentPage={pageno} />
    </div>
  );
}

Feeds.loadData = (store, match) => {
  return store.dispatch(fetchFeeds(match.params.pageno));
};
const mapStateToProps = (state) => ({
  feeds: state.feeds.feeds,
  loading: state.feeds.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeeds(pageno) {
      dispatch(fetchFeeds(pageno));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Feeds));
