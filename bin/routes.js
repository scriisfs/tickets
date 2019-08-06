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

app.get("/users/:_id", function(req, res) {
  let { _id } = req.params;
  controller.getUser(_id, res);
});

//Traer todos los registros
app.get("/Registros", (req, res) => {
controller.getRegistros(res)

})


//Agregar un registro
app.post("/Registros", (req, res) => {
  let { registros } = req.body;
  controller.setRegistros(registros, res);
 })


//Traer el registro de un estudiante en específico
app.get("/Registros/:pin/estudiantes/:codigo_estudiante", (req, res) => {
let { pin, codigo_estudiante} = req.params;
controller.getRegistro(pin, codigo_estudiante, res);

})

//Que un admin pueda ver el número de recarga del ticket de un estudiante
app.get("/Registros/admins/:id_admins/estudiantes/:id_estudiantes/tickets/:numero_recargas", (req, res) => {
console.log(req.params)
res.send("ok");
//controller.getRegistros(res)
})

//Traer todos los admins
app.get("/Admins", (req, res) => {
controller.getAdmins(res)

})

//Agregar un admin
app.post("/Admins", (req, res) => {
  let { admins } = req.body;
  controller.setAdmins(admins, res);
 })


//Mostrar el id de un admin con su respectivos nombres y apellidos
app.get("/Admins/:nombre_1/nombre_2/:apellido_1/:apellido_2", (req, res) => {
let { nombre_1, nombre_2, apellido_1, apellido_2} = req.params;
controller.getRegistroo( nombre_1, nombre_2, apellido_1, apellido_2, res);

})

//Traer todos los estudiantes
app.get("/Estudiantes", (req, res) => {
controller.getEstudiantes(res)

})

//Agregar un estudiante
app.post("/Estudiantes", (req, res) => {
  let { estudiantes } = req.body;
  controller.setEstudiantes(estudiantes, res);
 })

 //Tarer estudaintes por id
app.get("/Estudiantes/:_id", function(req, res) {
  let { _id } = req.params;
  controller.getEstudiante(_id, res);
});

app.get("/estudiantes/:id_estudiantes/bloques/:id_bloques", (req, res) => {
    let { estudiantes_id, bloques_id } = req.params;
    controller.getEstudianteBloque( estudiantes_id, bloques_id, res);
});

//Mostrar el bloque de horario de un estudiante
/*app.get("/Estudiantes/:id_estudiantes/bloques/:id_bloques", (req, res) => {
console.log(req.params)
res.send("ok");
//controller.getRegistros(res)
})*/

//Actualizar datos de un estudiante
app.put("/Estudiantes", function(req, res) {
  let estudiantes = req.body.estudiantes;
 // user.id = req.params.id;
  controller.updateEstudiantes(estudiantes, res);
});

//Eliminar a un estudiante
app.delete("/Estudiantes", function(req, res) {
  let { estudiantes } = req.params;
  controller.deleteEstudiantes(estudiantes, res);
});

//Traer todos los tickets
app.get("/Tickets", (req, res) => {
controller.getTickets(res)

})

//Agregar un ticket
app.post("/Tickets", (req, res) => {
  let { tickets } = req.body;
  controller.setTickets(tickets, res);
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
app.post("/Bloques", (req, res) => {
  let { bloques } = req.body;
  controller.setBloques(bloques, res);
})


exports.app = app;
