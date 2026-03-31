import { useNavigate } from "react-router-dom";
import InfoModal from "../../components/InfoModal";
import { useState } from "react";
import img1 from "../../assets/img_home.png";
import img2 from "../../assets/img_gans.png";

const Impact = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(null);

  const openModal = (title, content) => {
    setModal({ title, content });
  };

  return (
    <div className="about-section">
      <div className="about-text">
        <h2 className="about-title">Impacto</h2>
        <p>
          Los deepfakes tienen implicaciones importantes en distintos ámbitos
          como:
        </p>
        <div className="impact-grid">
          <div
            className="impact-card"
            style={{ backgroundImage: `url(${img1})` }}
            onClick={() =>
              openModal(
                "Impacto social",
                "Al facilitar la creación de contenido engañoso que puede influir en la percepción pública. Su uso se ha asociado con la desinformación, la suplantación de identidad y la violación de la privacidad, afectando la confianza en los medios digitales.",
              )
            }
          >
            <div className="impact-overlay">Social</div>
          </div>

          <div
            className="impact-card"
            style={{ backgroundImage: `url(${img2})` }}
            onClick={() =>
              openModal(
                "Impacto económico",
                "En el ámbito económico, los deepfakes representan un riesgo creciente en términos de fraude y seguridad financiera. Se han documentado casos de ingeniería social donde se utilizan voces sintéticas para autorizar transacciones o engañar a empleados de empresas.Estos ataques generan pérdidas económicas significativas y obligan a las organizaciones a invertir en sistemas de seguridad más sofisticados",
              )
            }
          >
            <div className="impact-overlay">Económico</div>
          </div>

          <div
            className="impact-card"
            style={{ backgroundImage: `url(${img1})` }}
            onClick={() =>
              openModal(
                "Impacto político",
                "Pueden ser utilizados como herramientas de manipulación política, particularmente en contextos electorales. \n\nLa difusión de contenido falso que simula declaraciones o acciones de figuras públicas puede influir en la opinión pública y desestabilizar procesos democráticos.",
              )
            }
          >
            <div className="impact-overlay">Político</div>
          </div>

          <div
            className="impact-card"
            style={{ backgroundImage: `url(${img2})` }}
            onClick={() =>
              openModal(
                "Impacto epistemológico",
                "Generan una crisis en la noción de evidencia. Tradicionalmente, el contenido audiovisual ha sido considerado una prueba confiable; sin embargo, la capacidad de generar falsificaciones realistas cuestiona esta premisa.",
              )
            }
          >
            <div className="impact-overlay">Epistemológico</div>
          </div>
        </div>
        <p>
          En conjunto, estos impactos muestran que los deepfakes no son solo una
          innovación tecnológica, sino un reto para la sociedad en su conjunto.
        </p>

        <div className="nav-buttons">
          <button onClick={() => navigate("/about/detection")}>
            ← Explorar detección
          </button>
          <button onClick={() => navigate("/quiz")}>
            Probar conocimientos →
          </button>
        </div>
      </div>
      {modal && (
        <InfoModal
          title={modal.title}
          content={modal.content}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
};

export default Impact;
