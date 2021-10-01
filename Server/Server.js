const mongoose = require("mongoose");
//const cors = require('cors');
const express = require("express");

//const User = require("./Model/userSchema");
const app = express();
//app.use(cors());

/* app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login')); */



const DB = "mongodb+srv://milan99:milan99@cluster0.ggfem.mongodb.net/fullstack?retryWrites=true&w=majority";
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose.connect(DB,connectionParams).then(() => {
  console.log(`connection success`);
}).catch( (err) => {
  console.error(`Error connecting to the database. \n${err}`);
})



const middleware=(req,res,next)=>{
    console.log(`hello my middleware`)
    next();
  }

app.get("/", (req, res) => {

  res.send("connnected");

});
app.get("/about",middleware, (req, res) => {

  res.send(` this is the about page`);

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));