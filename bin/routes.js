const express = require("express");
const app = express();
const {controller} = require("./Controller");
const bodyParser = require("body-parser");

app.use( bodyParser.json());

app.get("/", (req, res) => {
  res.send("Bienvenidos a tickets sotracor");

});

 //Traer todos los usuarios
app.get("/users", (req, res) => {
controller.getUsers(res)

})

//Agregar un usuario
app.post("/users", (req, res)=>{
    //console.log(req.body);
    controller.postUsers(req, res);
    //res.send('OK')
})

app.get("/Registros", (req, res) => {
controller.getRegistros(res)

})

app.get("/Registros/:id_estudiantes", (req, res) => {
console.log(req.params)
res.send("ok");
//controller.getRegistros(res)
})
exports.app = app;
