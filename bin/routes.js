const express = require("express");
const app = express();
const controller = require("./Controller")

app.get("/", (req, res) => {
  res.send("Bienvenidos a tickets sotracor");

});

app.get("/users", (req, res) => {
  let users = [
    { name: "Jhon", password: "454a5s4d" },
    { name: "Nina", password: "asdasf45" },
  ];

  res.send(users);

});

exports.app = app;