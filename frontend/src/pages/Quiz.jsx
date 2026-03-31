import React, { useState } from "react";
import QuizCard from "../components/quizzes/QuizCard";
import QuizModal from "../components/quizzes/QuizModal";
import QuizOne from "../components/quizzes/QuizOne";
import QuizTwo from "../components/quizzes/QuizTwo";

const quizzes = [
  {
    id: 1,
    title: "¿Es Deepfake?",
    image: "/images/deepfake1.jpg",
    component: "quiz1",
  },
  {
    id: 2,
    title: "Detecta la Manipulación",
    image: "/images/deepfake2.jpg",
    component: "quiz2",
  },
];

const Quiz = () => {
  const [activeQuiz, setActiveQuiz] = useState(null);

  const renderQuiz = () => {
    switch (activeQuiz) {
      case "quiz1":
        return <QuizOne />;
      case "quiz2":
        return <QuizTwo />;
      default:
        return null;
    }
  };

  return (
    <div className="quiz-container">
      <h1>Quizzes de Deepfakes</h1>

      <div className="quiz-grid">
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            title={quiz.title}
            image={quiz.image}
            onClick={() => setActiveQuiz(quiz.component)}
          />
        ))}
      </div>

      {activeQuiz && (
        <QuizModal onClose={() => setActiveQuiz(null)}>
          {renderQuiz()}
        </QuizModal>
      )}
    </div>
  );
};

export default Quiz;
