import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { loginExistingUser } from '../apiUtilis';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    verticalAlign: 'center',
    borderStyle: 'solid',
    borderColor: 'rgba(66,32,64)',
    width: '25%',
    height: '350px',
    color: 'black',
    margin: '0 auto',
    backgroundColor: 'white',
    textAlign: 'center',
    paddingTop: '40px',
    marginTop: '40px',


    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export function Login( props ) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
    

  const handleEmailChange = async (e) => { 
    
    e.preventDefault();
        
    await setEmail(e.target.value);

  };

  const handlePasswordChange = async (e) => { 
      e.preventDefault()

      await setPassword(e.target.value);

  };
  
  const handleSubmit = async (e) => { 
      e.preventDefault();

      console.log(email);
      console.log(password);
     
      try {
          const user = await loginExistingUser(email, password);
          props.handleUserChange(user);
          props.history.push('/');
          console.log(e);

      } catch(e) {
          setError(e.response.body.error)

      }
      
  };

  return (
    <form className={classes.root} noValidate autoComplete="on">
        <h2>Login</h2>
        {error && <h5 style={{color: 'red'}}> {error} </h5>}
      <TextField id="filled-basic" label="Email" variant="filled" onChange={handleEmailChange} />
      <TextField id="filled-basic" label="Password" variant="filled" type="password" onChange={handlePasswordChange} />
      <Button
       variant="contained" 
       style={{backgroundColor: 'rgba(66,32,64)', color: 'white'}}
       onClick={handleSubmit}>
        Login!
        </Button>
     <h5>Not a member? <Link to="/signup">SignUp Here!</Link> </h5>
    </form>
  );
}
