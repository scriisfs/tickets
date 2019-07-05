const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const BloquesSchema = new Schema ({
    id_tickets: String,
    numero_recargas: String,
    numero_consumo: String


});

var Bloques = mongoose.model("Bloques", BloquesSchema);
module.exports = Bloques;
