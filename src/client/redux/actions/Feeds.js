import {
  GET_FEEDS_REQUEST,
  GET_FEEDS_SUCCESS,
  GET_FEEDS_FAILURE,
} from "../constants/Feeds";
import Service from "../api/FetchBase";

export function fetchFeedsRequest() {
  return {
    type: GET_FEEDS_REQUEST,
  };
}

export function fetchFeedsSuccess(payload, pageno) {
  return {
    type: GET_FEEDS_SUCCESS,
    payload,
    pageno,
  };
}

export function fetchFeedsFailure(error) {
  return {
    type: GET_FEEDS_FAILURE,
    error,
  };
}

export const fetchFeeds = (page) => (dispatch, getState) => {
  const pageno = !isNaN(page) ? Number(page) : 1;
  let windowFeeds;
  if (typeof window !== "undefined") {
    const state = window.__PRELOADED_STATE__;
    windowFeeds = state?.feeds?.feeds[pageno] || undefined;
  }

  if (!getState().feeds.feeds[pageno] || !windowFeeds) {
    dispatch(fetchFeedsRequest());
    return Service.get("/search", { page: pageno - 1 })
      .then((result) => {
        dispatch(fetchFeedsSuccess(result, pageno));
      })
      .catch((err) => {
        dispatch(fetchFeedsFailure(err));
      });
  }
};
