import {
    SET_DEPARTMENTS,
    LIKE_SCREAM,
    UNLIKE_SCREAM,
    LOADING_DATA,
    DELETE_SCREAM,
    POST_SCREAM,
    SET_SCREAM,
    STOP_LOADING_UI,
    CLEAR_DATA,
  } from "../types";
  const initialState = {
    departments: {},
    department: {},
    loading: false,
  };
  export default function (state = initialState, action) {
    switch (action.type) {
      case LOADING_DATA:
        return {
          ...state,
          loading: true,
        };
      case SET_DEPARTMENTS:
        return {
          ...state,
          departments: action.payload,
          loading: false,
        };
    
   

   
      case STOP_LOADING_UI:
        return {
          ...state,
          loading: false,
        };
      case CLEAR_DATA:
        return {
          ...state,
          scream: {},
        };
      default:
        return state;
    }
  }
  