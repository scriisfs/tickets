const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const TicketsSchema = new Schema ({
    id_tickets: String,
    numero_recargas: String,
    numero_consumo: String


});

var Tickets = mongoose.model("Tickets", TicketsSchema);
module.exports = Tickets;
