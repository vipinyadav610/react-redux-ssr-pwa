const promiseMiddleware = () => {
  return (next) => async (action) => {
    const { promise, type, ...rest } = action;

    if (!promise) return next(action);

    const SUCCESS = type + "_SUCCESS";
    const REQUEST = type + "_REQUEST";
    const FAILURE = type + "_FAILURE";
    next({ ...rest, type: REQUEST });

    return promise
      .then((response) => {
        next({ ...rest, response: response, type: SUCCESS });
        return true;
      })
      .catch((error) => {
        next({ ...rest, error, type: FAILURE });
        return false;
      });
  };
};
export default promiseMiddleware;
