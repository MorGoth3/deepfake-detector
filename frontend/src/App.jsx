import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Detector from "./pages/Detector";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="layout">
        <Navbar />

        <div className="content-area">
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/detector" element={<Detector />} />
              <Route path="/quiz" element={<Quiz />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
