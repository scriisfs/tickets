const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const BloquesSchema = new Schema ({
    dia: String,
    hora_inicio: String,
    hora_finalizacion: String,

      estudiante: [
{
      type: Schema.Types.ObjectId,
      ref: "Estudiantes"
    }
  ]

});

var Bloques = mongoose.model("Bloques", BloquesSchema);
module.exports = Bloques;
