'use strict';
const ProductoModel = require('./Models/productoModel'); // Asegúrate de que la ruta sea correcta

//const bcrypt = require('bcrypt');

// Función para insertar un nuevo usuario
async function insertarProducto(req, res) {

    // Extraer los campos del cuerpo de la solicitud
    const { nombre, precio, marca, genero, talla, descripcion } = req.body;

    try {

        // Crear el objeto del usuario con los datos proporcionados y la contraseña hasheada
        const nuevoProducto = new ProductoModel({
            nombre,
            precio,
            marca,
            genero,
            talla,
            descripcion
        });

        // Guardar el nuevo producto en la base de datos
        const productoGuardado = await nuevoProducto.save();

        // Enviar la respuesta con el producto guardado
        return res.status(201).json({
            message: 'Producto registrado correctamente',
            data: productoGuardado
        });
    } catch (error) {
        // Manejar errores y enviar respuesta con error
        return res.status(500).json({
            message: 'Error al registrar el usuario',
            error: error.message
        });
    }
}

// Exportar la función para usarla en otros archivos
module.exports = { insertarProducto };