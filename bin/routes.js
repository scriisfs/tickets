const express = require("express");
const app = express();
const {controller} = require("./Controller")

app.get("/", (req, res) => {
  res.send("Bienvenidos a tickets sotracor");

});

app.get("/users", (req, res) => {
controller.getUsers(res)

})
exports.app = app;