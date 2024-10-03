// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexión a la base de datos exitosa');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1); // Terminar la ejecución si hay un error
    }
};

module.exports = connectDB;
