const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const EstudiantesSchema = new Schema ({
    id_estudiante: String,
    nombre_1: String,
    nombre_2: String,
    apellido_1: String,
    apellido_2: String,
    numero_identificacion: String,
    telefono: String,
    barrio: String,
    esrtrato: String,
    id_bloque: String

});

var Estudiantes = mongoose.model("Estudiantes", EstudiantesSchema);
module.exports = Estudiantes;
