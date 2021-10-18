const dotenv = require('dotenv');
const mongoose = require("mongoose");
const express = require("express");

const User = require("./Model/userSchema");
const app = express();


dotenv.config({path:"./config.env"});

//Import the database connection file
require('./Db/Connection');

//For the json file
app.use(express.json());

//Import  the Router file
app.use(require('./Router/Auth'));

//MIDDLEWARE

const middleware=(req,res,next)=>{
    console.log(`hello my middleware`)
    next();
  }

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server started on port ${PORT}`));


