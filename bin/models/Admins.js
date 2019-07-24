const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const AdminsSchema = new Schema ({
    nombre_1: String,
    nombre_2: String,
    apellido_1: String,
    apellido_2: String,
    numero_cedula: String,
    telefono: String

});

var Admins = mongoose.model("Admins", AdminsSchema);
module.exports = Admins;
