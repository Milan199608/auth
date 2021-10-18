const mongoose = require("mongoose");
const DB = process.env.DATABASE;


//CONNECT TO THE DATABASE ON ATLAS
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose.connect(DB,connectionParams).then(() => {
  console.log(`connection successfull`);
}).catch( (err) => {
  console.error(`Error connecting to the database. \n${err}`);
})
