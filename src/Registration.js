import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Registration = () => {
  const classes = useStyles();
  // create state variables for each input
  const [user,setuser] = useState({
    firstname:"",lastname:"",email:"",password:""
  });
  let name,value;
  
const handleInputs=(e)=>{
 
  name=e.target.name;
  value=e.target.value;


  setuser({...user,[name]:value})
  console.log(e.target.value)


}

  const handleSubmit = (e)=> {
    e.preventDefault();
   
  };
  




  return (
    <>
    
    <form className={classes.root} onSubmit={handleSubmit} method="Post">
      <TextField
        name="firstname"
        placeholder="Enter Your First Name"
        variant="filled"
        required
        value={user.firstname}
        onChange={handleInputs}
      />
      <TextField
        name="lastname"
        placeholder="Enter Your Last Name"
        variant="filled"
        required
        value={user.lastname}
        onChange={handleInputs}
      />
      <TextField
        name="email"
        variant="filled"
        placeholder="Enter Your Email"
        type="email"
        required
        value={user.email}
        onChange={handleInputs}
      />
      <TextField
        name="password"
        variant="filled"
        placeholder="Enter Your Password"
        type="password"
        required
        value={user.password}
        onChange={handleInputs}
      />
      <div>
        <Button variant="contained">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
    </>
  );
};

export default Registration;