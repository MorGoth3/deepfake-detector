import React, { useState, useEffect } from "react";

const itemsPool = [
  // FAKE
  { id: 1, label: "Parpadeo poco natural", type: "fake" },
  { id: 2, label: "Bordes borrosos en el rostro", type: "fake" },
  { id: 3, label: "Iluminación inconsistente", type: "fake" },
  { id: 4, label: "Expresiones faciales extrañas", type: "fake" },
  { id: 5, label: "Desfase entre labios y voz", type: "fake" },
  { id: 6, label: "Textura de piel artificial", type: "fake" },
  { id: 7, label: "Movimiento rígido", type: "fake" },

  // REAL
  { id: 8, label: "Parpadeo natural", type: "real" },
  { id: 9, label: "Sombras consistentes", type: "real" },
  { id: 10, label: "Movimiento fluido", type: "real" },
  { id: 11, label: "Sincronización correcta de labios", type: "real" },
  { id: 12, label: "Textura de piel detallada", type: "real" },
  { id: 13, label: "Iluminación coherente", type: "real" },
  { id: 14, label: "Expresiones naturales", type: "real" },
  { id: 15, label: "Detalles faciales consistentes", type: "real" },
];

const getRandomItems = (array, count) => {
  return [...array].sort(() => Math.random() - 0.5).slice(0, count);
};

const QuizTwo = () => {
  const [items, setItems] = useState([]);
  const [dropped, setDropped] = useState({ real: [], fake: [] });
  const [result, setResult] = useState(null);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    setItems(getRandomItems(itemsPool, 5));
    setDropped({ real: [], fake: [] });
    setResult(null);
  };

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("item", JSON.stringify(item));
  };

  const handleDrop = (e, category) => {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData("item"));

    setDropped((prev) => ({
      ...prev,
      [category]: [...prev[category], item],
    }));

    setItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  const allowDrop = (e) => e.preventDefault();

  const evaluate = () => {
    let correct = 0;
    let total = 0;

    Object.keys(dropped).forEach((category) => {
      dropped[category].forEach((item) => {
        total++;
        if (item.type === category) correct++;
      });
    });

    setResult({ correct, total });
  };

  return (
    <div>
      <h2>Clasifica los elementos</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* ITEMS */}
        <div>
          {items.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              style={{
                padding: "10px",
                margin: "10px",
                cursor: "grab",
              }}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* REAL */}
        <div
          onDrop={(e) => handleDrop(e, "real")}
          onDragOver={allowDrop}
          style={{
            border: "2px dashed green",
            padding: "10px",
            width: "200px",
          }}
        >
          <h3>Real</h3>
          {dropped.real.map((item) => (
            <p key={item.id}>{item.label}</p>
          ))}
        </div>

        {/* FAKE */}
        <div
          onDrop={(e) => handleDrop(e, "fake")}
          onDragOver={allowDrop}
          style={{ border: "2px dashed red", padding: "10px", width: "200px" }}
        >
          <h3>Deepfake</h3>
          {dropped.fake.map((item) => (
            <p key={item.id}>{item.label}</p>
          ))}
        </div>
      </div>

      <button onClick={evaluate}>Evaluar</button>

      {result && (
        <>
          <p>
            Correctos: {result.correct} / {result.total}
          </p>

          <button onClick={resetGame}>Reiniciar con nuevos elementos</button>
        </>
      )}
    </div>
  );
};

export default QuizTwo;
