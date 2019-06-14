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

//Traer todos los registros
app.get("/registros", (req, res) => {
controller.getRegistros(res)

})

//Agrgar un registro
app.post("/registros", (req, res)=>{
    //console.log(req.body);
    controller.postRegistros(req, res);
    //res.send('OK')
})





exports.app = app;
