import React from "react";

interface NavigationProps {
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  submitQuiz: () => void;
  currentQuestionIndex: number;
  totalQuestions: number;
  isAnswerSelected: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  goToNextQuestion,
  goToPreviousQuestion,
  currentQuestionIndex,
  totalQuestions,
  isAnswerSelected,
  submitQuiz,
}) => {
  return (
    <div className="quiz-navigation">
      {currentQuestionIndex > 0 && (
        <button onClick={goToPreviousQuestion} className="btn-navigation">
          Previous
        </button>
      )}
      {currentQuestionIndex < totalQuestions - 1 ? (
        <button
          onClick={goToNextQuestion}
          className="btn-navigation"
          disabled={!isAnswerSelected}
        >
          Next
        </button>
      ) : (
        <button
          onClick={submitQuiz}
          className="btn-navigation"
          disabled={!isAnswerSelected}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default Navigation;
