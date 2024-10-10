const express = require('express');
const router = express.Router();
const { insertarProducto } = require('../Controllers/productoController'); // Asegúrate de que la ruta sea correcta

// Definir la ruta para insertar un usuario
router.post('/insertar', insertarProducto);

module.exports = router;