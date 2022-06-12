import express from "express";
import cors from "cors";
import winston from "winston";
import QuestionRouter from "./routes/question.route.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "server-api.log" }),
  ],
  format: combine(label({ label: "server-api" }), timestamp(), myFormat),
});

const app = express();
app.use(express.json());
app.use(cors());
app.use("/questions", QuestionRouter);
app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

app.listen(3001, () => console.log("API Started!!"));
