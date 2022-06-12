import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import QuestionCreate from "./screens/CreateQuestion";
import QuestionsPage from "./screens/ListQuestions";

export default function App() {
  return (
    <Router>
      <Header>Pipecodes Redux Challenge</Header>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ErrorBoundary>
                <QuestionsPage />{" "}
              </ErrorBoundary>
            }
          />

          <Route
            path="/questions"
            element={
              <ErrorBoundary>
                <QuestionCreate />{" "}
              </ErrorBoundary>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
