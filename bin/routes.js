const express = require("express");
const app = express();
const {controller} = require("./Controller");
const bodyParser = require("body-parser");

app.use( bodyParser.json());

app.get("/", (req, res) => {
  res.send("Bienvenidos a tickets sotracor");

});

app.get("/users", (req, res) => {
controller.getUsers(res)

})

app.post("/users", (req, res)=>{
    //console.log(req.body);
    controller.postUsers(req, res);
    //res.send('OK')
})

exports.app = app;