'use strict'

let mongoose =  require ('mongoose');
let Schema = mongoose.Schema

let ProductoSchema = new Schema({
    nombre:{type: String,required:true},
    precio:{type: Number, required: true},
    marca:{type: String,required:true},
    genero:{type: String,required:true},
    talla:{type: String,required:true},
    descripcion:{type: String,required:true},
    createAt:{type:Date, default:Date.now, required:true}
});

module.exports = mongoose.model('Producto', ProductoSchema);