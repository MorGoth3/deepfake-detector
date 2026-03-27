import React from "react";
import { Link } from "react-router-dom";
import imgHome from "../assets/img_logo.png";
const Home = () => {
  return (
    <div className="page-wrapper">
      <div className="page-container">
        <h1>Deepfakes y detección de contenido falso</h1>
        <h2>
          Cómo la inteligencia artificial crea y combate la desinformación
        </h2>
        <p>
          En este sitio web aprende y detecta contenido falso generado con IA.
        </p>

        <img src={imgHome} alt="Deepfake detector" className="home-image" />
        <h3>¿Cómo quieres iniciar?</h3>

        <div className="home-buttons">
          <Link to="/about" className="home-btn">
            Aprender más
          </Link>

          <Link to="/detector" className="home-btn">
            Ir al Detector
          </Link>

          <Link to="/quiz" className="home-btn">
            Probar conocimientos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
