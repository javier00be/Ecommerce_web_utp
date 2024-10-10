'use strict';
const ProductoModel = require('./Models/productoModel'); // Asegúrate de que la ruta sea correcta

const bcrypt = require('bcrypt');

// Función para insertar un nuevo usuario
async function insertarProducto(req, res) {
    // Extraer los campos del cuerpo de la solicitud
    const { nombre, precio, marca, genero, talla, descripcion } = req.body;

    try {
        // Validar si ya existe un usuario con el mismo correo
        const usuarioExistente = await UsuarioModel.findOne({ correo: correo });

        if (usuarioExistente) {
            return res.status(400).json({ message: 'El usuario ya está registrado con el mismo correo electrónico' });
        }
        
        // Crear el objeto del usuario con los datos proporcionados y la contraseña hasheada
        const nuevoProducto = new ProductoModel({
            nombre,
            precio,
            marca,
            genero,
            talla,
            descripcion
        });

        // Guardar el nuevo usuario en la base de datos
        const usuarioGuardado = await nuevoUsuario.save();

        // Enviar la respuesta con el usuario guardado
        return res.status(201).json({
            message: 'Usuario registrado correctamente',
            data: usuarioGuardado
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
module.exports = { insertarUsuario };