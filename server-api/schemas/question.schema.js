import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    observation: String,
    date: String,
  },
  { collection: "questions" }
);

export default QuestionSchema;
