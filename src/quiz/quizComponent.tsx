import React, { useState, useEffect } from "react";
import { Quiz } from "../model/quiz";
import { randomQuestions } from "../util";
import "./quiz.scss";
import { fakeFetchQuiz, fetchAsnwers } from "./quizPromise";
import QuestionComponent from "./questionComponent";
import Navigation from "./quizNavigation";

const QuizComponent: React.FC = () => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [submit, setSubmit] = useState<boolean>(false);
  const [loadingResults, setLoadingResults] = useState<boolean>(false);
  const [finalScore, setFinalScore] = useState<any>(0);

  useEffect(() => {
    fetchQuizData();
  }, []);

  const fetchQuizData = async () => {
    try {
      const response = await fakeFetchQuiz();
      let data = await response;
      const randomQuestionsData = randomQuestions(data.questions);
      data.questions = randomQuestionsData;

      setQuiz(data);
    } catch (e) {
      console.log("Error", e);
    }
  };

  const onAnswerChange = (questionId: string, answerId: string) => {
    const question = quiz?.questions.find(
      (question) => question.id === questionId
    );
    if (question) {
      setAnswers([...answers, answerId]);
    }
  };

  const goToNextQuestion = () => {
    if (quiz && currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitQuiz = async () => {
    if (!quiz) return;

    try {
      setSubmit(true);
      setLoadingResults(true);
      const response = await fetchAsnwers(answers, quiz?.id || "");
      setLoadingResults(false);
      const score = ((response / quiz.questions.length) * 100).toFixed();

      setFinalScore(score);
    } catch (e) {
      setLoadingResults(false);
      console.log("Error", e);
    }
  };

  return (
    <div>
      {quiz ? (
        <div className="quiz-section">
          <h2>{quiz.title}</h2>
          <div className="quiz-main">
            {!submit && quiz.questions.length > 0 && (
              <>
                <QuestionComponent
                  onChangeOption={onAnswerChange}
                  question={quiz.questions[currentQuestion]}
                />

                <Navigation
                  goToNextQuestion={goToNextQuestion}
                  goToPreviousQuestion={goToPreviousQuestion}
                  submitQuiz={submitQuiz}
                  currentQuestionIndex={currentQuestion}
                  totalQuestions={quiz ? quiz.questions.length : 0}
                  isAnswerSelected={answers[currentQuestion] !== undefined}
                />
              </>
            )}
            {submit && (
              <div className="quiz-result">
                {loadingResults && <h2> Loading results... </h2>}
                {!loadingResults && (
                  <div>
                    <h2>Final Score: {finalScore}</h2>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <h2> Loading quiz... </h2>
      )}
    </div>
  );
};

export default QuizComponent;
