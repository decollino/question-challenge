import {
  QUESTIONS_CREATE_FAIL,
  QUESTIONS_CREATE_REQUEST,
  QUESTIONS_CREATE_SUCCESS,
  QUESTIONS_LIST_FAIL,
  QUESTIONS_LIST_REQUEST,
  QUESTIONS_LIST_SUCCESS,
} from "../constants/questionsConstants";
import axios from "axios";

export const listQuestions = (id) => async (dispatch) => {
  try {
    dispatch({
      type: QUESTIONS_LIST_REQUEST,
    });

    const { data } = await axios.get(
      `http://localhost:3001/questions/?page=${id}`
    );

    dispatch({
      type: QUESTIONS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: QUESTIONS_LIST_FAIL,
      payload: message,
    });
  }
};

export const createQuestionAction =
  ({ name, email, observation, date }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: QUESTIONS_CREATE_REQUEST,
      });

      const { data } = await axios.post(`http://localhost:3001/questions`, {
        name,
        email,
        observation,
        date,
      });

      dispatch({
        type: QUESTIONS_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: QUESTIONS_CREATE_FAIL,
        payload: message,
      });
    }
  };
