import "../styles/footer.css";

import logoInstitucion from "../assets/logo_uam.png";
import logoDivision from "../assets/logo_IC.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* SECCIÓN 1 */}
      <div className="footer-section">
        <img src={logoInstitucion} alt="Institución" className="footer-logo" />
      </div>

      {/* SECCIÓN 2 */}
      <div className="footer-section">
        <div className="footer-center">
          <img src={logoDivision} alt="División" />

          <div className="footer-text">
            <span>División de Ciencias Naturales e Ingeniería</span>
            <span>Ingeniería en Computación</span>
          </div>
        </div>
      </div>

      {/* SECCIÓN 3 */}
      <div className="footer-section">
        <div className="footer-right">
          <p>Proyecto de divulgación científica</p>
          <p>Elaborado por: Eduardo Mauricio Granados Hernández</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
