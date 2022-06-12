import express from "express";
import QuestionController from "../controllers/question.controller.js";

const router = express.Router();

router.post("/", QuestionController.createQuestion);
router.get("/", QuestionController.getQuestion);

export default router;
