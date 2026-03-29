import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutLayout from "./pages/about/AboutLayout";
import AboutIntro from "./pages/about/AboutIntro";
import Fundamentals from "./pages/about/Fundamentals";
import Generation from "./pages/about/Generation";
import Detection from "./pages/about/Detection";
import Impact from "./pages/about/Impact";
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
              <Route path="/about" element={<AboutLayout />}>
                <Route path="intro" element={<AboutIntro />} />
                <Route path="fundamentals" element={<Fundamentals />} />
                <Route path="generation" element={<Generation />} />
                <Route path="detection" element={<Detection />} />
                <Route path="impact" element={<Impact />} />
              </Route>
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
