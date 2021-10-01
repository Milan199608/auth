var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  firstname:{
      type:String,
      required:true
  },
  lastname:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
}

}); 

const User = mongoose.model('FULLSTACK', UserSchema);

module.exports = User;