import { combineReducers, createStore } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension'
import listReducer from "../reducers";

const rootReducer = combineReducers({listReducer})

const store =  createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

export default store;