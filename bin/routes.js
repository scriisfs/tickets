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
app.get("/Registros", (req, res) => {
controller.getRegistros(res)

})

//Traer un estudiante en específico
app.get("/Registros/estudiantes/:id_estudiantes", (req, res) => {
console.log(req.params)
res.send("ok");
//controller.getRegistros(res)
})

//Traer todos los admins
app.get("/Admins", (req, res) => {
controller.getAdmins(res)

})

//Traer todos los estudiantes
app.get("/Estudiantes", (req, res) => {
controller.getEstudiantes(res)

})

//Mostrar el bloque de hora de un estudiante
app.get("/Estudiantes/:id_estudiantes/bloques/:id_bloques", (req, res) => {
console.log(req.params)
res.send("ok");
//controller.getRegistros(res)
})


//Traer todos los tickets
app.get("/Tickets", (req, res) => {
controller.getTickets(res)

})

//Mostrar el consumo de tickets que tiene el estudiante
app.get("/Registros/estudiantes/:id_estudiantes/:numero_consumo", (req, res) => {
console.log(req.params)
res.send("ok");
//controller.getRegistros(res)
})


//Traer todos los bloques
app.get("/Bloques", (req, res) => {
controller.getBloques(res)

})

exports.app = app;
