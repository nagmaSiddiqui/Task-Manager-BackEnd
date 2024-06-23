const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const tasksRouter = require("./routes/tasks");
require("dotenv").config();

const app = express();

const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/tasks", tasksRouter);

module.exports = app;
