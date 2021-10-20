const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

// parse application/json
app.use(bodyParser.json());
app.use(cors())
 
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'restful_db'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//show all products
app.get('/api/user',(req, res) => {
  let sql = "SELECT * FROM user";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
 //show single product
app.get('/api/user/:id',(req, res) => {
  let sql = "SELECT * FROM user WHERE user_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
 //add new product
app.post('/api/user',(req, res) => {
  let data = {user_name: req.body.user_name, user_email: req.body.user_email,user_password:req.body.user_password,user_cpassword:req.body.user_cpassword,user_add:req.body.user_add,user_gender:req.body.user_gender,user_dob:req.body.user_dob,user_hobbies:req.body.user_hobbies};
  let sql = "INSERT INTO user SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
}); 
 
 //update product
app.put('/api/user/:id',(req, res) => {
  let sql = "UPDATE user SET user_name='"+req.body.user_name+"', user_email='"+req.body.user_email+"', user_password='"+req.body.user_password+"', user_cpassword='"+req.body.user_cpassword+"', user_add='"+req.body.user_add+"', user_gender='"+req.body.user_gender+"', user_dob='"+req.body.user_dob+"', user_hobbies='"+req.body.user_hobbies+"' WHERE user_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Delete product
app.delete('/api/user/:id',(req, res) => {
  let sql = "DELETE FROM user WHERE user_id="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
}); 
 
//Server listening
app.listen(5000,() =>{
  console.log('Server started on port 5000...');
});