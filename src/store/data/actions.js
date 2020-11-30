import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "./consts";

const axios = require("axios");

const fetchDataPending = () => {
  return {
    type: FETCH_DATA_PENDING,
  };
};

const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

const fetchDataError = (errorMessage) => {
  return {
    type: FETCH_DATA_ERROR,
    payload: errorMessage,
  };
};

export const fetchData = (method) => {
  return (dispatch) => {
    dispatch(fetchDataPending());
    axios
      .get(
        `http://ws.audioscrobbler.com/2.0/?method=${method}&api_key=d0db318d273286c85328e40fd43c9d62&format=json`
      )
      .then((response) => {
        const data = response.data;
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchDataError(error.message));
      });
  };
};
