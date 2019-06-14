const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    id_registros: String,
    id_admin: String,
    id_tickets: String,
    id_estudiantes: String,



});

var User = mongoose.model("User", UserSchema);
module.exports = User;
