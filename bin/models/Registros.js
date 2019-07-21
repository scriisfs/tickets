const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const RegistrosSchema = new Schema ({
    id_registros: String,
    id_admin: String,
    id_tickets: String,
    id_estudiantes: String,
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
  ]



});

var Registros = mongoose.model("Registros", RegistrosSchema);
module.exports = Registros;
