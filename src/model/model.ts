
export const quizData = {
    id: "quiz_1",
    title: "General Knowledge Quiz",
    questions: [
      {
        id: "q1",
        title: "What is the capital of France?",
        options: [
          { id: "q1a1", title: "Paris" },
          { id: "q1a2", title: "London" },
          { id: "q1a3", title: "Berlin" },
          { id: "q1a4", title: "Madrid" }
        ]
      },
      {
        id: "q2",
        title: "Which planet is known as the Red Planet?",
        options: [
          { id: "q2a1", title: "Earth" },
          { id: "q2a2", title: "Venus" },
          { id: "q2a3", title: "Mars" },
          { id: "q2a4", title: "Jupiter" }
        ]
      },
      {
        id: "q3",
        title: "What is the largest ocean on Earth?",
        options: [
          { id: "q3a1", title: "Atlantic Ocean" },
          { id: "q3a2", title: "Indian Ocean" },
          { id: "q3a3", title: "Arctic Ocean" },
          { id: "q3a4", title: "Pacific Ocean" }
        ]
      },
      {
        id: "q4",
        title: "Who wrote 'Hamlet'?",
        options: [
          { id: "q4a1", title: "Charles Dickens" },
          { id: "q4a2", title: "William Shakespeare" },
          { id: "q4a3", title: "Leo Tolstoy" },
          { id: "q4a4", title: "Mark Twain" }
        ]
      },
      {
        id: "q5",
        title: "What is the chemical symbol for Gold?",
        options: [
          { id: "q5a1", title: "Ag" },
          { id: "q5a2", title: "Au" },
          { id: "q5a3", title: "Ge" },
          { id: "q5a4", title: "Ga" }
        ]
      }
    ]
  };


export const correctAnswerModel = {
    quizId: "quiz_1",
    answersIds: ["q1a1", "q2a3", "q3a4", "q4a2", "q5a2"]
  };