import { Link } from "react-router-dom";
import { FaHome, FaBrain, FaSearch, FaQuestion } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sidebar">
      <Link to="/" className="nav-item">
        <FaHome />
        <span>Inicio</span>
      </Link>

      <Link to="/about" className="nav-item">
        <FaBrain />
        <span>Deepfakes</span>
      </Link>

      <Link to="/detector" className="nav-item">
        <FaSearch />
        <span>Detector</span>
      </Link>

      <Link to="/quiz" className="nav-item">
        <FaQuestion />
        <span>Quiz</span>
      </Link>
    </nav>
  );
};

export default Navbar;
