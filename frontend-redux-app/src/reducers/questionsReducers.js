import {
  QUESTIONS_CREATE_FAIL,
  QUESTIONS_CREATE_REQUEST,
  QUESTIONS_CREATE_SUCCESS,
  QUESTIONS_LIST_FAIL,
  QUESTIONS_LIST_REQUEST,
  QUESTIONS_LIST_SUCCESS,
} from "../constants/questionsConstants";

export const questionListReducer = (state = { questions: [] }, action) => {
  switch (action.type) {
    case QUESTIONS_LIST_REQUEST:
      return { loading: true };
    case QUESTIONS_LIST_SUCCESS:
      return { loading: false, questions: action.payload };
    case QUESTIONS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const questionCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case QUESTIONS_CREATE_REQUEST:
      return { loading: true };
    case QUESTIONS_CREATE_SUCCESS:
      return { loading: false, success: true };
    case QUESTIONS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
