const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const RegistrosSchema = new Schema ({
    id_registros: String,
    id_admin: String,
    id_tickets: String,
    id_estudiantes: String,
    pin: String,
    fecha_creacion: String

});

var Registros = mongoose.model("Registros", RegistrosSchema);
module.exports = Registros;
