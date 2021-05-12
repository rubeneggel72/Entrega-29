const mongoose=require('mongoose');

const nombreCollectionProductos = 'productos';
const nombreCollectionMensajes = 'mensajes';
const nombreCollectionUsers = 'users';

// -------------------------------------------------------------
//                         SCHEMA
// -------------------------------------------------------------
const productoSchema = mongoose.Schema({
    nombre: String,
    precio: Number,
    foto: String
});

const mensajeSchema = mongoose.Schema({
  author: Object,
  text: String,
  fyh: String
});

const userSchema = mongoose.Schema({
  username: String,
  password: String
});
const productos = mongoose.model(nombreCollectionProductos, productoSchema);
const mensajes = mongoose.model(nombreCollectionMensajes, mensajeSchema);
const user = mongoose.model(nombreCollectionUsers, userSchema);
module.exports= {productos,mensajes,user}

