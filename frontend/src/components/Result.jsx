import React from "react";

const Result = ({ result }) => {
  if (!result) return null;

  return (
    <div className="result-box">
      <h3>Probabilidad de deepfake</h3>
      <p className="result-value">
        {(result.probability * 100).toFixed(2) + "%"}
      </p>
    </div>
  );
};

export default Result;
