const { sendToAI } = require("../services/aiService");
const fs = require("fs");

exports.analyzeFile = async (req, res) => {
  try {
    const filePath = req.file.path;

    const result = await sendToAI(filePath);

    // opcional: borrar archivo después de usarlo
    fs.unlinkSync(filePath);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en análisis" });
  }
};
