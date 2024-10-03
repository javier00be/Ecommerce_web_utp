'use strict'

let mongoose =  require ('mongoose');
let Schema = mongoose.Schema

let UsuarioSchema = new Schema({
    rol:{type: String,maxlength:30,required:true},
    nombre:{type: String,maxlength:250,required:true},
    correo:{type: String,maxlength:250,required:true,unique:true},
    clave:{type: String,maxlength:250,required:true},
    estado:{type: Number,default:1},//1 es activo y 2 es desactivo
    celular:{type: String,maxlength:20,required:false},
    createAt:{type:Date, default:Date.now, required:true}
});

module.exports = mongoose.model('Usuario', UsuarioSchema);