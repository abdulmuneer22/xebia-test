import api from "../../api";
import _ from "lodash";
import { Alert } from "react-native";
import { Actions } from "react-native-router-flux";

const sayAlert = title => {
  Alert.alert(
    title,
    "My Alert Msg",
    [
      {
        text: "Retry",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: true }
  );
};

export const Search = (username, password) => {
  return dispatch => {
    api
      .search(username)
      .then(response => {
        if (
          response &&
          response.data &&
          response.data.results &&
          response.data.results.length > 0
        ) {
          var uI = _.findIndex(response.data.results, { name: username });

          if (uI >= 0 && password === response.data.results[uI].birth_year) {
            dispatch({
              type: "LOGIN_SUCCESS",
              payload: response.data.results[uI]
            });
            Actions.home();
          } else {
            alert("Invalid user name or password");
            dispatch({
              type: "LOGIN_FAILED",
              payload: response.data
            });
          }
        } else {
          alert("Invalid user name or password");
        }
      })
      .catch(error => {
        dispatch({
          type: "LOGIN_FAILED",
          payload: error
        });
        // sayAlert("Something went wrong");
      });
  };
};

export const SearchPlanets = kw => {
  return dispatch => {
    api
      .searchPlanets(kw)
      .then(response => {
        dispatch({
          type: "RECEIVED_PLANET_SEARCH_RESULTS",
          payload: response.data.results
        });
      })
      .catch(e => {
        dispatch({
          type: "FAILED_TO_RECEIVE_PLANET_SEARCH_RESULTS",
          payload: e
        });
      });
  };
};
