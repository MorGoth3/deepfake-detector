import { useNavigate } from "react-router-dom";

const Detection = () => {
  const navigate = useNavigate();

  return (
    <div className="about-section">
      <div className="about-text">
        <h2 className="about-title">Detección de deepfakes</h2>
        <p>
          Detectar deepfakes es un desafío en constante evolución. Los sistemas
          actuales utilizan inteligencia artificial para identificar señales que
          indican que un contenido ha sido manipulado.
        </p>
        <p>Algunos enfoques principales incluyen:</p>
        <h3 className="about-subtitle">Análisis visual</h3>
        <p>
          Se centra en detectar artefactos generados durante la síntesis, tales
          como inconsistencias en iluminación, texturas o bordes faciales. Estos
          métodos explotan imperfecciones introducidas por los modelos
          generativos
        </p>

        <h3 className="about-subtitle">Análisis biométrico</h3>
        <p>
          Se basa en características fisiológicas difíciles de replicar con
          precisión, como la frecuencia de parpadeo, microexpresiones faciales o
          movimientos oculares, que suelen presentar anomalías en contenido
          sintético.
        </p>

        <h3 className="about-subtitle">Análisis audiovisual</h3>
        <p>
          Evalúa la coherencia entre audio y video, identificando
          desincronizaciones o discrepancias entre voz y movimiento labial, lo
          cual es común en deepfakes mal generados.
        </p>
        <button onClick={() => alert("¿Fake o real?")}>Probar detección</button>

        <div className="nav-buttons">
          <button onClick={() => navigate("/about/generation")}>
            ← Anterior
          </button>
          <button onClick={() => navigate("/about/impact")}>Siguiente →</button>
        </div>
      </div>
    </div>
  );
};

export default Detection;
