const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const proyectoRoutes = require("./routes/routesproyecto");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/portfolio")
.then(() => console.log("MongoDB conectado"))
.catch(err => console.error("Error de conexion:", err));

app.use("/api/proyecto", proyectoRoutes);

module.exports = app;
