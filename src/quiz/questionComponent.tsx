import React, { useState, useEffect } from "react";
import { Question } from "../model/quiz";

interface QuestionProps {
  question: Question;
  onChangeOption: Function;
}

const questionComponent: React.FC<QuestionProps> = ({
  question,
  onChangeOption,
}) => {
  useEffect(() => {
    console.log("question component ", question);
  }, []);

  return (
    <div className="question-section">
      {question ? (
        <div>
          <h4>{question.title}</h4>
          <div className="answers">
            {question.options.map((option) => (
              <div className="answer" key={option.id}>
                <input
                  type="radio"
                  id={option.id}
                  name="question"
                  value={option.id}
                  onChange={() => onChangeOption(question.id, option.id)}
                />
                <label htmlFor={option.id}>{option.title}</label>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default questionComponent;
