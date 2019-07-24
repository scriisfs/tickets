const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const TicketsSchema = new Schema ({
    numero_recargas: String,
    numero_consumo: String


});

var Tickets = mongoose.model("Tickets", TicketsSchema);
module.exports = Tickets;
