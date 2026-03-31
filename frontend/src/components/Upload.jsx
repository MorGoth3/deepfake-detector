import { useState } from "react";
import axios from "axios";
import API_URL from "../config/api";

const Upload = ({ setResult }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    // Validación básica (imagen/video)
    if (
      !selectedFile.type.startsWith("image/") &&
      !selectedFile.type.startsWith("video/")
    ) {
      setError("Solo se permiten imágenes o videos");
      return;
    }

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setError("");
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Selecciona un archivo primero");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(`${API_URL}/api/analyze`, formData);

      // MVP: simulación (luego reemplazas con respuesta real del modelo)
      setResult({
        probability: response.data.probability,
        heatmap: response.data.heatmap,
        file: preview,
      });
    } catch (err) {
      setError("Error al subir el archivo");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Input */}
      <input type="file" onChange={handleFileChange} />

      {/* Error */}
      {error && <p>{error}</p>}

      {/* Preview */}
      {preview && (
        <div>
          {file.type.startsWith("image/") ? (
            <img src={preview} alt="preview" />
          ) : (
            <video src={preview} controls />
          )}
        </div>
      )}

      {/* Botón */}
      <div className="simulate-btn">
        <button onClick={handleUpload} disabled={loading}>
          {loading ? "Analizando..." : "Analizar"}
        </button>
      </div>
    </div>
  );
};

export default Upload;
