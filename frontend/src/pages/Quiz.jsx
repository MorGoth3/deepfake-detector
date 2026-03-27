import { useState } from "react";

const samples = [
  { id: 1, answer: "fake" },
  { id: 2, answer: "real" },
];

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleAnswer = (ans) => {
    if (ans === samples[index].answer) {
      setFeedback("Correcto");
    } else {
      setFeedback("Incorrecto");
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page-container">
        <h2>¿Lo detectarías tú?</h2>
        <div>
          <button onClick={() => handleAnswer("real")}>Real</button>
          <button onClick={() => handleAnswer("fake")}>Fake</button>
        </div>
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default Quiz;
