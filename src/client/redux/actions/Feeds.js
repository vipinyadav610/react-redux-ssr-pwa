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
  fetchFeedsRequest();
  return Service.get("/search", { page: pageno - 1 })
    .then((result) => {
      fetchFeedsSuccess(result, pageno);
    })
    .catch((err) => {
      fetchFeedsFailure(err);
    });
};
