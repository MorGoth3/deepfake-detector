import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NeuralNetworkModal from "../../components/generation/NeuralNetworkModal";
import GenerativeModelModal from "../../components/generation/GenerativeModelModal";
import img1 from "../../assets/img_home.png";
import img2 from "../../assets/img_gans.png";

const Fundamentals = () => {
  const navigate = useNavigate();
  const [showSimulation, setShowSimulation] = useState(false);
  const [genModel, setGenModel] = useState(null);

  return (
    <div className="about-section">
      <div className="about-text">
        <h2 className="about-title">Fundamentos técnicos</h2>

        <p>La generación de deepfakes se sustenta principalmente en:</p>
        <ul>
          <li>Redes neuronales profundas.</li>
          <li>Modelos generativos.</li>
          <li>Procesamiento de datos.</li>
        </ul>
        <h3 className="about-subtitle">Redes neuronales profundas</h3>
        <p>
          Las redes neuronales profundas son sistemas de inteligencia artificial
          inspirados en el cerebro humano. Están formadas por múltiples capas
          que transforman la información paso a paso. Cada capa aprende algo
          diferente.
        </p>

        <h4>Por ejemplo</h4>

        <p>Cuando una red analiza un rostro:</p>

        <ul>
          <li>La primera capa detecta bordes.</li>
          <li>La siguiente identifica ojos y nariz.</li>
          <li>Las últimas reconocen el rostro completo.</li>
        </ul>

        <div className="simulate-btn">
          <button onClick={() => setShowSimulation(true)}>
            Simular proceso
          </button>
        </div>

        <p>
          Gracias a este proceso, la red puede entender patrones complejos en
          imágenes y videos.
        </p>

        <h3 className="about-subtitle">Modelos generativos</h3>
        <p>
          Los modelos generativos son algoritmos capaces de crear contenido
          nuevo a partir de datos existentes. En lugar de solo analizar
          información, estos modelos aprenden cómo se ven los datos y generan
          nuevas versiones.
        </p>
        <p>
          Entre los modelos más relevantes para deepfakes se encuentran
          (Selecciona uno para explorar):
        </p>

        <div className="tech-grid">
          <div
            className="tech-card"
            style={{ backgroundImage: `url(${img2})` }}
            onClick={() => setGenModel("gans")}
          >
            <div className="tech-overlay">GANs</div>
          </div>

          <div
            className="tech-card"
            style={{ backgroundImage: `url(${img1})` }}
            onClick={() => setGenModel("autoencoder")}
          >
            <div className="tech-overlay">Autoencoders</div>
          </div>

          <div
            className="tech-card"
            style={{ backgroundImage: `url(${img2})` }}
            onClick={() => setGenModel("diffusion")}
          >
            <div className="tech-overlay">Difusión</div>
          </div>
        </div>
        <h3 className="about-subtitle">Procesamiento de datos</h3>
        <p>
          Los deepfakes se crean utilizando grandes cantidades de datos para
          enseñar a la inteligencia artificial cómo se ve y se comporta una
          persona. Para lograrlo, los modelos aprenden patrones importantes y
          los organizan de forma simplificada, lo que les permite generar
          imágenes o videos nuevos. Para saber qué tan realista es el resultado,
          se utilizan algunas medidas.
        </p>

        <h4>Por ejemplo: </h4>

        <ul>
          <li>
            FID: indica qué tan parecidas son las imágenes generadas a las
            reales.
          </li>
          <li>PSNR: mide la calidad de la imagen generada.</li>
        </ul>
        <p>
          Gracias a estas herramientas, es posible mejorar los modelos y hacer
          que los deepfakes sean cada vez más realistas.
        </p>

        <div className="nav-buttons">
          <button onClick={() => navigate("/about/intro")}>
            ← Explorar inicio
          </button>
          <button onClick={() => navigate("/about/generation")}>
            Explorar generación →
          </button>
        </div>
      </div>

      {showSimulation && (
        <NeuralNetworkModal onClose={() => setShowSimulation(false)} />
      )}

      {genModel && (
        <GenerativeModelModal
          type={genModel}
          onClose={() => setGenModel(null)}
        />
      )}
    </div>
  );
};

export default Fundamentals;
