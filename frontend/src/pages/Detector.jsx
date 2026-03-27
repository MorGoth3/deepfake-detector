import { useState } from "react";
import Upload from "../components/Upload";
import Result from "../components/Result";
import HeatmapOverlay from "../components/HeatmapOverlay";

const Detector = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="page-wrapper">
      <div className="page-container">
        <h2>Detector</h2>
        <Upload setResult={setResult} />
        <Result result={result} />
      </div>
    </div>
  );
};

export default Detector;
