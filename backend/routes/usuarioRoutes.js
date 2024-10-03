const express = require('express');
const router = express.Router();
const { insertarUsuario } = require('../Controllers/usuarioController'); // Asegúrate de que la ruta sea correcta

// Definir la ruta para insertar un usuario
router.post('/insertar', insertarUsuario);
router.post('/modificar', insertarUsuario);

module.exports = router;
