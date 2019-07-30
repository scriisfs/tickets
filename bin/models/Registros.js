const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const RegistrosSchema = new Schema ({
    _id_admin: String,
    _id_tickets: String,
    _id_estudiantes: String,
    pin: String,
    fecha_creacion: String,

      admins: [
    {
      type: Schema.Types.ObjectId,
      ref: "Admins"
    }
  ],
     tickets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tickets"
    }
  ],

  estudiantes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Estudiantes"
    }
  ]



});

var Registros = mongoose.model("Registros", RegistrosSchema);
module.exports = Registros;
