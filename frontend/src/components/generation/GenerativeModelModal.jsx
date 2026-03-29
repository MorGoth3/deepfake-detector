import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const models = {
  gans: {
    title: "GANs (Generative Adversarial Networks)",
    description:
      "Las GANs consisten en dos redes neuronales en competencia: un generador que produce contenido sintético y un discriminador que intenta distinguir entre datos reales y falsos. Este proceso adversarial mejora progresivamente la calidad de las muestras generadas. ",
    steps: [
      "Ruido aleatorio",
      "Generador crea imagen",
      "Discriminador evalúa",
      "Mejora iterativa",
      "Imagen final",
    ],
  },

  autoencoder: {
    title: "Autoencoders",
    description:
      "Son modelos de aprendizaje no supervisado que comprenden dos componentes: un codificador que transforma los datos en una representación latente y un decodificador que reconstruye la información original.",
    steps: [
      "Imagen original",
      "Codificación",
      "Espacio latente",
      "Decodificación",
      "Imagen reconstruida",
    ],
  },

  diffusion: {
    title: "Modelos de Difusión",
    description:
      "Estos modelos generan datos a partir de ruido aleatorio y lo refinan paso a paso hasta generar una imagen.",
    steps: [
      "Ruido puro",
      "Eliminación de ruido",
      "Estructura aparece",
      "Detalles finos",
      "Imagen final",
    ],
  },
};

const GenerativeModelModal = ({ type, onClose }) => {
  const model = models[type];
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < model.steps.length - 1) {
      const timer = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 4200);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const reset = () => setStep(0);

  return (
    <div className="nn-modal-overlay">
      <div className="nn-modal-content">
        <h2>{model.title}</h2>
        <p style={{ opacity: 0.8 }}>{model.description}</p>

        <div className="nn-container">
          {model.steps.map((s, index) => (
            <div key={index} className="nn-layer-wrapper">
              {/* conexión animada */}
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
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </motion.div>
              )}

              <motion.div
                className={`nn-layer ${index <= step ? "active" : ""}`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index <= step ? 1 : 0.3,
                }}
              >
                <div className="nn-box">
                  {type === "gans" && index === 2 ? "🧠 vs 🧠" : "⚙️"}
                </div>
                <p>{s}</p>
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

export default GenerativeModelModal;
