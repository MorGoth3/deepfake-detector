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
          generativos.
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

        <h2>Limitaciones</h2>
        <p>
          A pesar de los avances, los sistemas de detección presentan
          limitaciones significativas:
        </p>
        <ul>
          <li>
            Baja capacidad de generalización: los modelos suelen fallar al
            enfrentarse a datos fuera de su conjunto de entrenamiento.
          </li>
          <li>
            Rápida obsolescencia: los avances en generación superan
            constantemente a los métodos de detección.
          </li>
          <li>
            Dependencia de datasets: los sesgos en los datos afectan el
            rendimiento del modelo.
          </li>
        </ul>
        <h2>Nuevas estrategias</h2>
        <p>Ante estas limitaciones, han surgido nuevas estrategias:</p>
        <ul>
          <li>
            Análisis físico: estudio de propiedades inherentes a la captura de
            imágenes (iluminación, óptica).
          </li>
          <li>
            Blockchain: verificación de autenticidad mediante registro inmutable
            de contenido.
          </li>
          <li>
            Marcas de agua digitales: inserción de señales invisibles para
            identificar contenido generado.
          </li>
        </ul>
        <div className="simulate-btn">
          <button onClick={() => alert("¿Fake o real?")}>
            Probar detección
          </button>
        </div>

        <div className="nav-buttons">
          <button onClick={() => navigate("/about/generation")}>
            ← Explorar generación
          </button>
          <button onClick={() => navigate("/about/impact")}>
            Explorar impacto →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detection;
