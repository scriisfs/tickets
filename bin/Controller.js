const mongoose = require ("mongoose");
const User = require ("./models/User");
const Registros = require ("./models/Registros")

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
   getRegistros(res){
        Registros.find({}, (err, registros)=>{
            if(err) throw err;

            res.send( registros );

      })

   }

        postUsers(req, res){
        let users = req.body.users;
        User.create( users, (err, result)=>{
            if(err)throw err;
            res.send({newUser:result})
        })
    }
}

exports.controller = new Controller()