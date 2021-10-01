import React,{useState} from 'react';
import "./Login.css"
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
//import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 
 export default function Login({setToken}) {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   //const [token, setToken] = useState();
 
   const handleSubmit = async e => {
     e.preventDefault();
     let token = await loginUser({
       email,
       password
     });
     setToken(token);
   }
 

  const useStyles = makeStyles((theme) => ({
    container: {
      padding: theme.spacing(3),
  
    },
  }));
  const classes = useStyles();

  return (
      <> 
    <Container className={classes.container} maxWidth="xs">
    
    <AccountCircle style={{ fontSize: "200px" }}/>
     
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Email" name="email" size="small" variant="outlined" onChange={e => setEmail(e.target.value)}/>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  size="small"
                  type="password"
                  variant="outlined"
                  onChange={e => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button color="secondary" fullWidth type="submit" variant="contained">
              Log in
            </Button>
          </Grid>
        </Grid>
      </form>
    
    </Container>
    </>
  );
};
/* Login.propTypes = {
  setToken: PropTypes.func.isRequired
} */
