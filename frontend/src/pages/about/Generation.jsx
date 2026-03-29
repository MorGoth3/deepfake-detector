import { useNavigate } from "react-router-dom";
import img2 from "../../assets/img_gans.png";
import { useState } from "react";
import DeepfakeProcessModal from "../../components/generation/DeepfakeProcessModal";

const Generation = () => {
  const navigate = useNavigate();
  const [showSimulation, setShowSimulation] = useState(false);

  return (
    <div className="about-section">
      <div className="about-text">
        <h2 className="about-title">¿Cómo se generan?</h2>

        <p>
          Crear un deepfake es un proceso en varias etapas donde un modelo
          aprende a imitar a una persona.
        </p>

        <p>El proceso sigue estos pasos:</p>

        <h3 className="about-subtitle">1. Recolección de datos</h3>
        <p>
          Se obtienen imágenes o videos de una persona. Mientras más datos haya,
          mejor será el resultado.
        </p>
        <h3 className="about-subtitle">2. Entrenamiento del modelo</h3>
        <p>El modelo analiza los datos y aprende patrones como:</p>

        <ul>
          <li>Rasgos faciales</li>
          <li>Expresiones</li>
          <li>Movimientos</li>
        </ul>
        <h3 className="about-subtitle">3. Generación</h3>
        <p>El modelo usa lo aprendido para crear nuevas imágenes o videos.</p>
        <h3 className="about-subtitle">4. Postprocesamiento</h3>
        <p>
          Se ajustan detalles como iluminación y textura para hacer el resultado
          más realista.
        </p>

        <button onClick={() => setShowSimulation(true)}>Simular proceso</button>

        <div className="nav-buttons">
          <button onClick={() => navigate("/about/fundamentals")}>
            ← Explora fundamentos
          </button>
          <button onClick={() => navigate("/about/detection")}>
            Explora detección →
          </button>
        </div>
      </div>

      <img src={img2} alt="generation" className="about-image" />

      {showSimulation && (
        <DeepfakeProcessModal onClose={() => setShowSimulation(false)} />
      )}
    </div>
  );
};

export default Generation;
