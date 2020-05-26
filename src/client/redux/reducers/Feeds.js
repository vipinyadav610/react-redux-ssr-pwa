import {
  GET_FEEDS_REQUEST,
  GET_FEEDS_SUCCESS,
  GET_FEEDS_FAILURE,
} from "../constants/Feeds";
export default function feeds(
  state = { loading: false, feeds: [], totalPages: 0, error: null },
  action
) {
  switch (action.type) {
    case GET_FEEDS_REQUEST:
      return { ...state, loading: true };
    case GET_FEEDS_SUCCESS:
      return {
        ...state,
        totalPages: action.payload.nbPages,
        feeds: action.payload.hits.filter(({ title }) => title),
        loading: false,
      };
    case GET_FEEDS_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
}
