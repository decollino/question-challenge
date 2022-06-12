import QuestionService from "../services/question.service.js";
import validator from "email-validator";

async function createQuestion(req, res, next) {
  try {
    let question = req.body;
    if (!question.name || !question.email || !question.date) {
      throw new Error("The name, email and date are requerired!");
    }

    if (!validator.validate(question.email)) {
      throw new Error("The email is invalid!");
    }

    try {
      new Date(question.date).toISOString().split("T")[0];
    } catch (err) {
      throw new Error("The date is invalid!");
    }
    if (!validateDate(question.date)) {
      throw new Error("The date must be greater than tomorrow's date!");
    }

    await QuestionService.createQuestion(question);
    res.end();
    logger.info(`POST /question/info - ${JSON.stringify(question)}`);
  } catch (err) {
    next(err);
  }
}

async function getQuestion(req, res, next) {
  try {
    res.send(await QuestionService.getQuestion(req.query.id, req.query.page));
    logger.info(`GET /questions/:id or :page - ${JSON.stringify()}`);
  } catch (err) {
    next(err);
  }
}

function validateDate(inputDate) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  //
  const inputDateStr = new Date(inputDate).toISOString().split("T")[0];
  const tomottowSrt = tomorrow.toISOString().split("T")[0];

  if (inputDateStr > tomottowSrt) {
    return true;
  }
  return false;
}

export default {
  createQuestion,
  getQuestion,
};
