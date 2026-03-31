import React, { useState, useEffect } from "react";

const questionsPool = [
  // 1. ¿Qué es un deepfake?
  {
    question: "¿Qué es un deepfake?",
    options: [
      "Contenido multimedia generado o manipulado con IA",
      "Un tipo de archivo de video",
      "Un filtro de redes sociales",
      "Un programa de edición básico",
    ],
    correct: 0,
  },
  {
    question: "¿Cuál es el objetivo principal de un deepfake?",
    options: [
      "Simular contenido realista falso",
      "Mejorar la calidad de video",
      "Reducir el tamaño de archivos",
      "Editar audio únicamente",
    ],
    correct: 0,
  },

  // 2. Fundamentos técnicos
  {
    question: "¿Qué son las redes neuronales profundas?",
    options: [
      "Modelos inspirados en el cerebro humano",
      "Tipos de bases de datos",
      "Lenguajes de programación",
      "Archivos multimedia",
    ],
    correct: 0,
  },
  {
    question: "¿Qué hacen las GANs?",
    options: [
      "Generan contenido enfrentando dos redes",
      "Comprimen videos",
      "Detectan virus",
      "Editan imágenes manualmente",
    ],
    correct: 0,
  },
  {
    question: "¿Qué modelo genera imágenes desde ruido?",
    options: [
      "Modelos de difusión",
      "Compresores",
      "Bases de datos",
      "Firewalls",
    ],
    correct: 0,
  },
  {
    question: "¿Qué hacen los autoencoders?",
    options: [
      "Codifican y reconstruyen datos",
      "Transmiten datos",
      "Eliminan ruido",
      "Detectan errores humanos",
    ],
    correct: 0,
  },

  // 3. ¿Cómo se generan?
  {
    question: "¿Cuál es el primer paso para crear un deepfake?",
    options: [
      "Recolección de datos",
      "Publicación",
      "Render final",
      "Edición manual",
    ],
    correct: 0,
  },
  {
    question: "¿Qué ocurre durante el entrenamiento?",
    options: [
      "El modelo aprende patrones",
      "Se exporta el video",
      "Se publica el contenido",
      "Se elimina ruido",
    ],
    correct: 0,
  },
  {
    question: "¿Qué es el postprocesamiento?",
    options: [
      "Mejorar el resultado final",
      "Entrenar el modelo",
      "Recolectar datos",
      "Eliminar datos",
    ],
    correct: 0,
  },

  // 4. Detección
  {
    question: "¿Cuál es una señal común de deepfake?",
    options: [
      "Inconsistencias en el rostro",
      "Alta resolución",
      "Buena iluminación",
      "Audio claro",
    ],
    correct: 0,
  },
  {
    question: "¿Qué se analiza para detectar deepfakes?",
    options: [
      "Patrones visuales y temporales",
      "Solo el audio",
      "El tamaño del archivo",
      "El formato",
    ],
    correct: 0,
  },
  {
    question: "¿Qué tecnología ayuda a detectar deepfakes?",
    options: [
      "Modelos de IA",
      "Filtros de Instagram",
      "Compresores",
      "Navegadores",
    ],
    correct: 0,
  },

  // 5. Impacto
  {
    question: "¿Qué impacto social pueden tener?",
    options: [
      "Desinformación",
      "Mejorar películas",
      "Reducir costos",
      "Optimizar redes",
    ],
    correct: 0,
  },
  {
    question: "¿Qué impacto político pueden causar?",
    options: [
      "Manipulación de opiniones",
      "Mejorar campañas",
      "Reducir impuestos",
      "Optimizar elecciones",
    ],
    correct: 0,
  },
  {
    question: "¿Qué impacto económico pueden tener?",
    options: [
      "Fraudes y pérdidas",
      "Mejorar inversiones",
      "Reducir costos",
      "Aumentar ventas",
    ],
    correct: 0,
  },
];

const getRandomItems = (array, count) => {
  return [...array].sort(() => Math.random() - 0.5).slice(0, count);
};

const QuizOne = () => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    resetQuiz();
  }, []);

  const resetQuiz = () => {
    setQuestions(getRandomItems(questionsPool, 5));
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowFeedback(false);
    setFinished(false);
  };

  const handleAnswer = (index) => {
    if (selected !== null) return;

    setSelected(index);
    setShowFeedback(true);

    if (index === questions[current].correct) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    setShowFeedback(false);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const getClass = (index) => {
    if (!showFeedback) return "";

    if (index === questions[current].correct) return "correct";
    if (index === selected) return "incorrect";

    return "";
  };

  if (!questions.length) return null;

  if (finished) {
    return (
      <div>
        <h2>Resultado final</h2>
        <p>
          {score} / {questions.length}
        </p>

        <button onClick={resetQuiz}>Reiniciar con nuevas preguntas</button>
      </div>
    );
  }

  return (
    <div>
      <h2>{questions[current].question}</h2>

      <div className="item-question">
        {questions[current].options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            className={getClass(i)}
          >
            {opt}
          </button>
        ))}
      </div>

      {showFeedback && (
        <>
          <p>
            {selected === questions[current].correct
              ? "✅ Correcto"
              : "❌ Incorrecto"}
          </p>

          <button onClick={nextQuestion}>Siguiente</button>
        </>
      )}
    </div>
  );
};

export default QuizOne;
