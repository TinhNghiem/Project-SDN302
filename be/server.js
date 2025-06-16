require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json());

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
