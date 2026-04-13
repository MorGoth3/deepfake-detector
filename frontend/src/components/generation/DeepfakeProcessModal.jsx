import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import img from "../../assets/img_face.png";
import imgDataCollection from "../../assets/icon_data_collection.png";
import imgTraining from "../../assets/icon_neural_net.png";

const steps = [
  {
    title: "Recolección de datos",
    description: "Se recopilan imágenes de la persona",
    type: "data",
  },
  {
    title: "Entrenamiento",
    description: "El modelo aprende rasgos faciales",
    type: "train",
  },
  {
    title: "Generación",
    description: "Se crea una nueva imagen",
    type: "generate",
  },
  {
    title: "Postprocesamiento",
    description: "Se mejora calidad y realismo",
    type: "enhance",
  },
  {
    title: "Resultado final",
    description: "Deepfake generado",
    type: "result",
  },
];

const DeepfakeProcessModal = ({ onClose }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < steps.length - 1) {
      const timer = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 4300);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const reset = () => setStep(0);

  const renderVisual = (type) => {
    switch (type) {
      case "data":
        return (
          <div className="df-stack">
            <img src={imgDataCollection} />
            <img src={imgDataCollection} />
          </div>
        );

      case "train":
        return <img src={imgTraining} className="df-img enhanced" />;

      case "generate":
        return <img src={img} className="df-img glitch" />;

      case "enhance":
        return <img src={img} className="df-img enhanced" />;

      case "result":
        return <img src={img} className="df-result" />;

      default:
        return null;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Simulación: Creación de Deepfake</h2>

        <div className="nn-description-generation">
          <p>{steps[step].description}</p>
        </div>

        <div className="nn-container">
          {steps.map((s, index) => (
            <div key={index} className="nn-layer-wrapper">
              {/* conexión */}
              {index > 0 && (
                <motion.div
                  className="nn-connection"
                  animate={{
                    width: index <= step ? "80px" : "0px",
                  }}
                >
                  <motion.div
                    className="nn-signal"
                    animate={{
                      x: index <= step ? [0, 40, 80] : 0,
                    }}
                    transition={{ repeat: Infinity, duration: 5 }}
                  />
                </motion.div>
              )}

              <motion.div
                className={`nn-layer ${index <= step ? "active" : ""}`}
                animate={{
                  opacity: index <= step ? 1 : 0.3,
                }}
              >
                <div className="nn-box">{renderVisual(s.type)}</div>
                <p>{s.title}</p>
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

export default DeepfakeProcessModal;
