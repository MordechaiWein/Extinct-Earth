import React, { useState, useContext  } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MyContext } from "../MyContext";


function Copyright(props) {
  return (
    <Typography variant="body2" color="common.white" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Extinct Earth
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#00000000', 
    },
    secondary: {
      main: '#ff9800', 
    },
  },
});


function SignIn() {

  const {setUser, user, setPage} = useContext(MyContext)
  const [errors, setErrors] = useState([])
  const [data, setData] = useState({
    username: '',
    password: ''
  })
  
  function handleChange(event) {
    setData({...data, [event.target.name] : event.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    .then((response) => {
      if (response.ok) {
        response.json().then(data => {
          setUser(data)
          setPage("Home")
          alert('Welcome you have successfully logged in')
        })
      } else {
        response.json().then(data => setErrors(data.errors))
      }
    })
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://wallpaperaccess.com/full/4457087.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{backgroundColor: '#0f0f0f'}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'warning.light' }}>
            <img 
              width="38" 
              height="38" 
              src="https://img.icons8.com/glyph-neue/64/dinosaur.png"
              alt="dinosaur"
            />
            </Avatar>
            <Typography component="h1" variant="h4" sx={{color: 'white', fontWeight: 'bold'}}>
              Sign In
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                placeholder='Username*'
                name="username"
                autoComplete="username"
                onChange={handleChange}
                sx={{backgroundColor: 'white', borderRadius: '0.3rem'}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder='Password*'
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                sx={{backgroundColor: 'white', borderRadius: '0.3rem'}}
              />
           
              <Button
                type="submit"
                fullWidth
                color='secondary'
                variant="contained"
                sx={{ mt: 3, mb: 2, fontWeight: 'bold', height: '3rem', color: 'white' }}
              >
                Sign In
              </Button>
              {errors.map(error => 
                <Alert 
                  severity="error"
                  sx={{color: 'red', marginBottom: '1rem'}}
                >
                  {error}
                </Alert>
              )}
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignIn


