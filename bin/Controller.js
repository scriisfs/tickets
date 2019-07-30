const mongoose = require ("mongoose");
const User = require ("./models/User");
const Registros = require ("./models/Registros");
const Admins = require ("./models/Admins");
const Tickets = require ("./models/Tickets");
const Bloques = require ("./models/Bloques");
const Estudiantes = require ("./models/Estudiantes")

class Controller {
    constructor(){
        this.connect();
    }

async connect (){
    try{
            await mongoose.connect(
            "mongodb+srv://scriisfs:sotracor2019@cluster0-piltr.mongodb.net/Tickets_Sotracor?retryWrites=true",
            {useNewUrlParser:true}
            );
            console.log("conectados a la base de datos")
        }catch(e){
            console.error(e)
        }
    }

    getUsers(res){
        User.find({}, (err, users)=>{
            if(err) throw err;

            res.send( users );

      })

   }

getUser(_id, res) {
User.find({ _id }, (err, users) => {
    if (err) throw err;
      res.send({ User: users});
    });
  }

   getRegistros(res){
        Registros.find({}, (err, registros)=>{
            if(err) throw err;

            res.send( registros );

      })

   }

getRegistro( pin, codigo_estudiante, res) {
Registros.find({ pin, codigo_estudiante }, (err, registros) => {
    if (err) throw err;
      res.send({ Registro: registros});
    });
  }

getRegistroo( nombre_1, nombre_2, apellido_1, apellido_2, res) {
Registros.find({ nombre_1, nombre_2, apellido_1, apellido_2 }, (err, registros) => {
    if (err) throw err;
      res.send({ registroo: registros});
    });
  }

   getAdmins(res){
        Admins.find({}, (err, admins)=>{
            if(err) throw err;

            res.send( admins );

      })

   }

 getBloques(res) {
    Bloques.find().exec(function(err, bloques) {
      if (err) throw err;
      res.send({ status: 200, bloques: bloques });
    });
  }

 getEstudiantes(res){
        Estudiantes.find({}, (err, estudiantes)=>{
            if(err) throw err;

            res.send( estudiantes );

      })

   }

getEstudiante(_id, res) {
Estudiantes.find({ _id }, (err, estudiantes) => {
    if (err) throw err;
      res.send({ Estudiante: estudiantes});
    });
  }

   getTickets(res){
        Tickets.find({}, (err, tickets)=>{
            if(err) throw err;

            res.send( tickets );

      })

   }

   getBloques(res){
        Bloques.find({}, (err, bloques)=>{
            if(err) throw err;

            res.send( bloques );

      })

   }

        postUsers(req, res){
        let users = req.body.users;
        User.create( users, (err, result)=>{
            if(err)throw err;
            res.send({newUser:result})
        })
    }

setRegistros(registros, res) {
    Registros.create(registros, function(err, newRegistros) {
      if (err) throw err;
      res.send({ status: 200, nR: newRegistros});
    });
  }


setAdmins(admins, res) {
    Admins.create(admins, function(err, newAdmins) {
      if (err) throw err;
      res.send({ status: 200, nA: newAdmins});
    });
  }


setEstudiantes(estudiantes, res) {
    Estudiantes.create(estudiantes, function(err, newEstudiantes) {
      if (err) throw err;
      res.send({ status: 200, nE: newEstudiantes});
    });
  }

updateEstudiantes(estudiantes, res) {
    let { nombre_1, apellido_1 } = estudiantes;
    Estudiantes.updateOne(
      { $set: { nombre_1: nombre_1, apellido_1: apellido_1} }
    )
      .then(rawResponse => {
        res.send({ message: "Estudiante updated", raw: rawResponse });
      })
      .catch(err => {
        if (err) throw err;
      });
  }

  deleteEstudiantes(estudiantes, res) {
    Estudiantes.deleteOne({ estudiantes }, function(err) {
      if (err) throw err;
      res.send({ message: "Estudiante has been deleted" });
    });
  }


setBloques(bloques, res) {
    Bloques.create(bloques, function(err, newBloques) {
      if (err) throw err;
      res.send({ status: 200, nB: newBloques});
    });
  }


       setTickets(tickets, res) {
    Tickets.create(tickets, function(err, newTickets) {
      if (err) throw err;
      res.send({ status: 200, nT: newTickets});
    });
  }

}



exports.controller = new Controller()