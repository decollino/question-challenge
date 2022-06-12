import { createSlice } from "@reduxjs/toolkit";

const questions = [];

export const questionSlice = createSlice({
  name: "questions",
  initialState: { value: questions },
  reducers: {
    pageQuestion: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { pageQuestion } = questionSlice.actions;
export default questionSlice.reducer;
