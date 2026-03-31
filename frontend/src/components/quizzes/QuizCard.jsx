import React from "react";

const QuizCard = ({ title, image, onClick }) => {
  return (
    <div
      className="quiz-card"
      onClick={onClick}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="quiz-overlay">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default QuizCard;
