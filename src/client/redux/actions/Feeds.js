import {
  GET_FEEDS_REQUEST,
  GET_FEEDS_SUCCESS,
  GET_FEEDS_FAILURE,
} from "../constants/Feeds";
import Service from "../api/FetchBase";

export const fetchFeeds = (page) => (dispatch) => {
  const pageno = !isNaN(page) ? Number(page) : 1;
  dispatch({
    type: GET_FEEDS_REQUEST,
  });
  return Service.get("/search", { page: pageno - 1 })
    .then((result) => {
      dispatch({
        type: GET_FEEDS_SUCCESS,
        payload: result,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_FEEDS_FAILURE,
        error: err,
      });
    });
};
