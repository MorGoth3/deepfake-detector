import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { PiShareNetwork } from "react-icons/pi";
import { FiCodepen } from "react-icons/fi";
import { GoCodescan } from "react-icons/go";
import { ImWarning } from "react-icons/im";
import { BsPatchQuestion } from "react-icons/bs";
import { FaCodeCompare } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="sidebar">
      <Link to="/" className="nav-item">
        <FaHome />
        <span>Inicio</span>
      </Link>

      <Link to="/about/intro" className="nav-item">
        <LuBrain />
        <span>Deepfakes</span>
      </Link>

      <Link to="/about/fundamentals" className="nav-item">
        <PiShareNetwork />
        <span>Fundamentos Técnicos</span>
      </Link>

      <Link to="/about/generation" className="nav-item">
        <FiCodepen />
        <span>¿Cómo se generan?</span>
      </Link>

      <Link to="/about/detection" className="nav-item">
        <GoCodescan />
        <span>Detección</span>
      </Link>

      <Link to="/about/impact" className="nav-item">
        <ImWarning />
        <span>Impacto</span>
      </Link>

      <Link to="/quiz" className="nav-item">
        <BsPatchQuestion />
        <span>Quiz</span>
      </Link>

      <Link to="/detector" className="nav-item">
        <FaCodeCompare />
        <span>Detector</span>
      </Link>
    </nav>
  );
};

export default Navbar;
