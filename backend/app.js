"use strict";
require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const http = require("http");
const cors = require("cors");
const connectDB = require('./db'); // Importar connectDB desde db.js
const app = express();
const server = http.createServer(app);

// Importar las rutas de usuario
const usuarioRoutes = require('./routes/usuarioRoutes');
const productoRoutes = require('./models/productoModel');


// Configuración de middlewares
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));

// Configuración de cabeceras para CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Allow", "GET, PUT, POST, DELETE, OPTIONS");
    next();
});

// Rutas de la API
app.use('/api/usuario', usuarioRoutes);
app.use('/api/producto',productoRoutes);


// Configurar el puerto
const port = process.env.PORT || 4202;

// Conectar a la base de datos y luego iniciar el servidor
connectDB().then(() => {
    server.listen(port, () => {
        console.log("Servidor corriendo en: " + port);
    });
}).catch((err) => {
    console.error("Fallo al iniciar el servidor debido a la base de datos:", err);
});

module.exports = app;
