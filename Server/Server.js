const mongoose= require("mongoose");
const express = require("express");
const app = express();


const DB ="mongodb+srv://Milan:milan99@$@cluster0.ejniy.mongodb.net/auth?retryWrites=true&w=majority";
 

mongoose.connect(DB,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("connection successfull");

}).catch((error)=>
console.log(`no connection`)
);

const middleware=(req,res,next)=>{
  console.log(`hello from middleware`);
  next();

}

app.get("/", (req, res) => {

  res.send("connetdhhsdthdsght");

});
  
const PORT = process.env.PORT || 5000;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));