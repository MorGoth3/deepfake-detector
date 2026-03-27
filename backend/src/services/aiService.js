const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

exports.sendToAI = async (filePath) => {
  const formData = new FormData();
  formData.append("file", fs.createReadStream(filePath));

  const response = await axios.post(process.env.AI_URL + "/analyze", formData, {
    headers: formData.getHeaders(),
  });

  return response.data;
};
