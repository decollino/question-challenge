import QuestionSchema from "../schemas/question.schema.js";
import { connect } from "./mongo.db.js";

async function createQuestion(question) {
  try {
    const mongoose = await connect();
    const Question = mongoose.model("Question", QuestionSchema);
    question = new Question(question);
    await question.save();
  } catch (err) {
    throw err;
  }
}

async function getQuestionById(id) {
  try {
    const mongoose = await connect();
    const Question = mongoose.model("Question", QuestionSchema);
    const query = Question.findById(id);
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function getQuestions() {
  try {
    const mongoose = await connect();
    const Question = mongoose.model("Question", QuestionSchema);
    const query = Question.findAll();
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function getQuestionsOnPage(pageNo) {
  const limit = 20;
  let skip;
  let totalCount;
  let lastPage = 0;

  try {
    const mongoose = await connect();
    const Question = mongoose.model("Question", QuestionSchema);
    totalCount = await Question.count();
    if (totalCount > 0) {
      if (totalCount % limit > 0) {
        lastPage = parseInt(totalCount / limit);
      } else {
        lastPage = parseInt(totalCount / limit) - 1;
      }
    }
    if (pageNo) {
      skip = pageNo * limit;
    } else {
      skip = lastPage * limit;
    }
    const query = Question.find().skip(skip).limit(limit);
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

export default {
  createQuestion,
  getQuestionById,
  getQuestions,
  getQuestionsOnPage,
};
