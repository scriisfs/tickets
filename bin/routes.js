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

//Agregar un registro
app.post("/Registros", (req, res)=>{
    //console.log(req.body);
    controller.postRegistros(req, res);
    res.send('OK')
})


//Traer el registro de un estudiante en específico
app.get("/Registros/estudiantes/:id_estudiantes", (req, res) => {
console.log(req.params)
res.send("ok");
//controller.getRegistros(res)
})

//Que un admin pueda ver el número de recarga del ticket de un estudiante
app.get("/Registros/admin/:id_admins/estudiantes/:id_estudiantes/tickets/numero_recarga", (req, res) => {
console.log(req.params)
res.send("ok");
//controller.getRegistros(res)
})

//Traer todos los admins
app.get("/Admins", (req, res) => {
controller.getAdmins(res)

})

//Agregar un admin
app.post("/Admins", (req, res)=>{
    //console.log(req.body);
    controller.postAdmins(req, res);
    res.send('OK')
})


//Mostrar el id de un admin con su respectivos nombres y apellidos
app.get("/Registros/admins/:id_admins/:nombre_1/:nombre_2/:apellido_1/:apellido_2", (req, res) => {
console.log(req.params)
res.send("ok");
//controller.getRegistros(res)
})

//Traer todos los estudiantes
app.get("/Estudiantes", (req, res) => {
controller.getEstudiantes(res)

})

//Agregar un registro
app.post("/Estudiantes", (req, res)=>{
    //console.log(req.body);
    controller.postEstudiantes(req, res);
    res.send('OK')
})


//Mostrar el bloque de horario de un estudiante
app.get("/Estudiantes/:id_estudiantes/bloques/:id_bloques", (req, res) => {
console.log(req.params)
res.send("ok");
//controller.getRegistros(res)
})


//Traer todos los tickets
app.get("/Tickets", (req, res) => {
controller.getTickets(res)

})

//Agregar un ticket
app.post("/Tickets", (req, res)=>{
    //console.log(req.body);
    controller.postTickets(req, res);
    res.send('OK')
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

//Agregar un bloque
app.post("/Bloques", (req, res)=>{
    //console.log(req.body);
    controller.postBloques(req, res);
    res.send('OK')
})

exports.app = app;
