import {
  GET_FEEDS_REQUEST,
  GET_FEEDS_SUCCESS,
  GET_FEEDS_FAILURE,
} from "../constants/Feeds";
import Service from "../api/FetchBase";

export const fetchFeeds = () => (dispatch) => {
  dispatch({
    type: GET_FEEDS_REQUEST,
  });
  return Service.get("/todos")
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
