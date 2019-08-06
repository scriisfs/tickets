const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Bloques = mongoose.model('Bloques');

const EstudiantesSchema = new Schema ({
    nombre_1: String,
    nombre_2: String,
    apellido_1: String,
    apellido_2: String,
    numero_identificacion: String,
    telefono: String,
    barrio: String,
    codigo_estudiante: String,
    esrtrato: String,
    id_bloque: String,

      bloques_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Bloques"
    }
  ]

});

var Estudiantes = mongoose.model("Estudiantes", EstudiantesSchema);
module.exports = Estudiantes;
