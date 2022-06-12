import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  questionCreateReducer,
  questionListReducer,
} from "./reducers/questionsReducers";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
  questionList: questionListReducer,
  questionCreate: questionCreateReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
