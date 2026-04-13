import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import faceImg from "../../assets/img_face.png";

const steps = [
  { label: "Imagen de entrada", type: "image" },
  { label: "Detección de bordes", type: "edges" },
  { label: "Identificación de rasgos", type: "features" },
  { label: "Reconocimiento facial", type: "face" },
  { label: "Resultado", type: "result" },
];

const NeuralNetworkModal = ({ onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [result, setResult] = useState(null);

  // AUTO PLAY
  useEffect(() => {
    if (activeStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setActiveStep((prev) => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      // resultado final aleatorio
      const prob = (Math.random() * 0.5 + 0.5).toFixed(2);
      setResult({
        label: prob > 0.7 ? "FAKE" : "REAL",
        prob,
      });
    }
  }, [activeStep]);

  const reset = () => {
    setActiveStep(0);
    setResult(null);
  };

  // Render por tipo
  const renderContent = (type) => {
    switch (type) {
      case "image":
        return <img src={faceImg} alt="input" className="nn-img" />;

      case "edges":
        return <img src={faceImg} alt="edges" className="nn-img edges" />;

      case "features":
        return (
          <div className="nn-face">
            <img src={faceImg} alt="features" className="nn-img" />
            <div className="eye left" />
            <div className="eye right" />
            <div className="mouth" />
          </div>
        );

      case "face":
        return (
          <div className="nn-face highlight">
            <img src={faceImg} alt="face" className="nn-img" />
          </div>
        );

      case "result":
        return result ? (
          <div className="nn-result">
            {result.label} ({result.prob})
          </div>
        ) : (
          "..."
        );

      default:
        return null;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Simulación de Red Neuronal</h2>

        <div className="nn-container">
          {steps.map((step, index) => (
            <div key={index} className="nn-layer-wrapper">
              {/* 🔵 flujo animado */}
              {index > 0 && (
                <motion.div
                  className="nn-connection"
                  initial={{ width: 0 }}
                  animate={{
                    width: index <= activeStep ? "100%" : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="nn-signal"
                    animate={{
                      x: index <= activeStep ? [0, 40, 80] : 0,
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                    }}
                  />
                </motion.div>
              )}

              <motion.div
                className={`nn-layer ${index <= activeStep ? "active" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: index <= activeStep ? 1 : 0.3,
                  y: 0,
                }}
              >
                <div className="nn-box">{renderContent(step.type)}</div>
                <p>{step.label}</p>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="nn-controls">
          <button onClick={reset}>Reiniciar</button>
          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default NeuralNetworkModal;
