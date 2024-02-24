import { Question } from "./model/quiz";

export   const randomQuestions = (questions: Question[]): Question[] => {
    for (let i = 0; i < questions.length; i++) {
      let random = Math.floor(Math.random() * questions.length);
      let temp = questions[i];
      questions[i] = questions[random];
      questions[random] = temp;
    }
    return questions;
  };
