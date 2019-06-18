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

//Agregar un registros
app.post("/registro", (req, res)=>{
    //console.log(req.body);
    controller.postRegistros(req, res);
    //res.send('OK')
})

//Traer todos los admins
app.get("/admins", (req, res) => {
controller.getAdmins(res)

})

//Agregar un admin
app.post("/admins", (req, res)=>{
    //console.log(req.body);
    controller.postAdmins(req, res);
    //res.send('OK')
})

//Traer todos los tickets
app.get("/tickets", (req, res) => {
controller.getTickets(res)

})

//Agregar un ticket
app.post("/tickets", (req, res)=>{
    //console.log(req.body);
    controller.postTickets(req, res);
    //res.send('OK')
})

//Traer todos los estudiantes
app.get("/estudiantes", (req, res) => {
controller.getEstudiantes(res)

})

//Agregar un estudiante
app.post("/estudiantes", (req, res)=>{
    //console.log(req.body);
    controller.postEstudiantes(req, res);
    //res.send('OK')
})

//Traer todos los bloques
app.get("/bloques", (req, res) => {
controller.getBloques(res)

})

//Agregar un bloque
app.post("/bloques", (req, res)=>{
    //console.log(req.body);
    controller.postBloques(req, res);
    //res.send('OK')
})


exports.app = app;
