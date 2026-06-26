const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const courseRoutes = require("./routes/courseroutes");
dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/courses", courseRoutes);
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

const PORT = process.env.PORT || 5200;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});