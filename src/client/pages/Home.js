import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchFeeds } from "../redux/actions/Feeds";
import Spinner from "../components/Spinner/Spinner";

function Home(props) {
  useEffect(() => {
    return props.fetchFeeds(props.match.params.id);
  }, []);

  return (
    <Spinner loading={props.loading}>
      <div>
        {props.feeds.map(({ title }) => {
          return <div key={title}>{title}</div>;
        })}
      </div>
    </Spinner>
  );
}

Home.loadData = (store, match) => {
  return store.dispatch(fetchFeeds(match.params.id));
};
const mapStateToProps = (state) => ({
  feeds: state.feeds.feeds,
  loading: state.feeds.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeeds(id) {
      dispatch(fetchFeeds(id));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
