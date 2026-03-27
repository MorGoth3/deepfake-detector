const express = require("express");
const cors = require("cors");
const analyzeRoutes = require("./routes/analyze");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", analyzeRoutes);

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
