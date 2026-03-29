import React, { useEffect, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import ScoreBoard from "../components/ScoreBoard";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/quiz`)
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  useEffect(() => {
    if (timeLeft === 0) handleAnswer(null);
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswer = (answer) => {
    const correct = questions[current].correct;

    if (answer === correct) {
      setScore((prev) => prev + 10 + timeLeft); // bonus por rapidez
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setTimeLeft(10);
    } else {
      setGameOver(true);
    }
  };

  if (!questions.length) return <p>Cargando...</p>;

  if (gameOver) {
    return <ScoreBoard score={score} />;
  }

  return (
    <div>
      <h1>⚡ Deepfake Speed Quiz</h1>
      <Timer timeLeft={timeLeft} />
      <QuestionCard question={questions[current]} onAnswer={handleAnswer} />
    </div>
  );
};

export default Quiz;
