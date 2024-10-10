const express = require('express');
const router = express.Router();
const { productoController } = require('../Controllers/productoController'); // Asegúrate de que la ruta sea correcta

// Definir la ruta para insertar un usuario
router.post('/insertar', productoController.insertarProducto);
router.post('/insertar', productoController.obtenerProductos);

module.exports = router;