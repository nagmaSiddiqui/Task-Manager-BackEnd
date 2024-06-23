const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const tasksRouter = require("./routes/tasks");

const app = express();

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://nagma:nagma0901@cluster0.su6nqwk.mongodb.net/taskmanager?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/tasks", tasksRouter);

module.exports = app;
