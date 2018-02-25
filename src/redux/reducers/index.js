import { combineReducers } from "redux";

const user = (state = "", action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return action.payload;

    default:
      return state;
  }
};

const planetResults = (state = "", action) => {
  switch (action.type) {
    case "RECEIVED_PLANET_SEARCH_RESULTS":
      return action.payload;

    case "CLEAR_SEARCH":
      state = [];
      return state;

    default:
      return state;
  }
};

const searchCount = (state = 0, action) => {
  switch (action.type) {
    case "UPDATE_COUNT":
      return state + 1;

    case "RESET_COUNTER":
      state = 0;
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  user,
  planetResults,
  searchCount
});
