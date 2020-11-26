import {
    SET_DEPARTMENTS,
    LOADING_DATA,
    LIKE_SCREAM,
    UNLIKE_SCREAM,
    DELETE_SCREAM,
    CLEAR_ERRORS,
    SET_ERRORS,
    LOADING_UI,
    POST_SCREAM,
    SET_SCREAM,
    STOP_LOADING_UI,
    CLEAR_DATA,
  } from "../types";
  import axios from "axios";
  export const getScreams = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .get("https://us-central1-salimia-doctor.cloudfunctions.net/api/departments")
      .then((res) => {
        dispatch({
          type: SET_DEPARTMENTS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_DEPARTMENTS,
          payload: {},
        });
      });
  };