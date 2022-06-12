import { createSlice } from "@reduxjs/toolkit";

const question = {
  email: "",
  name: "",
  observation: "",
  date: "",
};

export const questionSlice = createSlice({
  name: "question",
  initialState: { value: question },
  reducers: {
    addQuestion: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addQuestion } = questionSlice.actions;
export default questionSlice.reducer;
