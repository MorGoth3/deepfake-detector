import { useNavigate } from "react-router-dom";
import img1 from "../../assets/img_home.png";
import InfoModal from "../../components/InfoModal";
import { useState } from "react";

const AboutIntro = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(null);

  const openModal = (title, content) => {
    setModal({ title, content });
  };

  return (
    <div className="about-section">
      <div className="about-text">
        <h2 className="about-title">¿Qué son los deepfakes?</h2>

        <p>
          Los deepfakes son contenidos audiovisuales sintéticos generados
          mediante{" "}
          <span
            className="highlight-word"
            onClick={() => openModal("Modelos de aprendizaje profundo", "###")}
          >
            modelos de aprendizaje profundo
          </span>{" "}
          que permiten replicar o sustituir características humanas como el
          rostro, la voz o los gestos con un alto grado de realismo. A
          diferencia de las técnicas tradicionales de edición digital, los
          deepfakes no se limitan a modificar contenido existente, sino que
          aprenden patrones estadísticos complejos para generar nuevas
          representaciones realistas.
        </p>

        <p>
          Desde la computación, los deepfakes se entienden como{" "}
          <span
            className="highlight-word"
            onClick={() => openModal("Modelos generativos", "###")}
          >
            modelos generativos
          </span>{" "}
          que aproximan distribuciones de datos. En el ámbito de la ciencia de
          datos, implican el uso de grandes volúmenes de información para
          entrenar modelos capaces de generalizar patrones. Desde la
          comunicación científica, representan una transformación en la manera
          en que se interpreta la evidencia audiovisual.
        </p>
        <div className="nav-buttons">
          <button onClick={() => navigate("/about/fundamentals")}>
            Explorar fundamentos →
          </button>
        </div>
      </div>

      <img src={img1} alt="deepfake" className="about-image" />

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

export default AboutIntro;
