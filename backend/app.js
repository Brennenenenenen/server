const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongo = require("mongoose");

const userRoutes = require("./routes/user");
const patientRoutes = require("./routes/patients");
const cartRoutes = require("./routes/cart");
const patientHistoryRoutes = require("./routes/patientHistory");
const medsRoutes = require("./routes/meds");

const app = express(); 


mongo.connect("mongodb://Admin:Bitsnbytes1@52.14.159.236:27017/Diabetes_app", { useNewUrlParser: true, useCreateIndex: true }, function(err, response){
    if(err) {
      console.log(err);
    }
    else{
      console.log('connected to database'); 
    }
})


// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));



app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });



app.use("/api/user", userRoutes);
app.use("/api/patient", patientRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/phistory", patientHistoryRoutes);
app.use("/api/meds", medsRoutes);
  
module.exports = app;