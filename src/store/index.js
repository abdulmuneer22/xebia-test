import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../redux/reducers";
import {logger} from 'redux-logger'

export default function configureStore() {
  const store = createStore(
    reducer,
    applyMiddleware(
      thunk,
      logger
    )
  );

  return store;
}
