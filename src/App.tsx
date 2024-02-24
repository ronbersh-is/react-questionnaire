import React from "react";
import logo from "./logo.svg";
import "./App.css";
import QuizComponent from "./quiz/quizComponent";

function App() {
  return (
    <div className="app-main">
      <h1 className="app-title">Welcome to Quiz</h1>
      <QuizComponent />
    </div>
  );
}

export default App;
