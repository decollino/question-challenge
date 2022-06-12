import QuestionRepository from "../repositories/question.repository.js";

async function createQuestion(question) {
  await QuestionRepository.createQuestion(question);
}

async function getQuestions() {
  return await QuestionRepository.getQuestions();
}

async function getQuestion(id, page) {
  if (id) {
    return await QuestionRepository.getQuestionById(id);
  }
  return await QuestionRepository.getQuestionsOnPage(page);
}

export default {
  createQuestion,
  getQuestions,
  getQuestion,
};
