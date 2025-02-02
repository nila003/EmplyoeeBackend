// Task1: initiate app and run server at 3000
var express = require("express");
var morgan = require("morgan");
require("dotenv").config();
const employeeRoute = require('./routes/employeeRoute');
require('./dB/dbConnection')

var app= express();
app.use(morgan("dev"));
const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));

app.listen(process.env.port,()=>{
    console.log(`Listening to port ${process.env.port}`)
})

// Task2: create mongoDB connection 


//Task 2 : write api with error handling and appropriate api mentioned in the TODO below

app.use("/api",employeeRoute);






//TODO: get data from db  using api '/api/employeelist'




//TODO: get single data from db  using api '/api/employeelist/:id'





//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}






//TODO: delete a employee data from db by using api '/api/employeelist/:id'





//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}


//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



