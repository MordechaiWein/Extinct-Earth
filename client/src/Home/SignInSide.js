import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { Helmet } from 'react-helmet';


function Copyright(props) {
  return (
    <Typography variant="body2" color="common.white" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#00000000', // Override the primary color to red
    },
    secondary: {
      main: '#ff9800', // Override the secondary color to green
    },
  },
});


export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const theme = useTheme();
  



  return (
    <ThemeProvider theme={defaultTheme}>
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Helmet>
      <Box 
        sx={{
          backgroundImage: 'url(https://wallpaperaccess.com/full/4457087.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '100vh',
          display: 'flex',
          '@media (max-width: 600px)': {
            backgroundImage: 'url(https://wallpaperaccess.com/full/4457087.jpg)',
            backgroundSize: '100% 100%',
          },
        }}
      >
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: '8vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: theme.spacing(2, 4, 12), 
            borderRadius: '4%',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'warning.light' }}>
            
          </Avatar>
          <Typography component="h1" variant="h4" sx={{color: 'white', fontWeight: 'bold'}}>
            User Log In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder='Username*'
              name="email"
              autoComplete="email"
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
              sx={{backgroundColor: 'white', borderRadius: '0.3rem'}}
            />
         
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='secondary'
              sx={{ mt: 3, mb: 2, fontWeight: 'bold', height: '3rem', color: 'white' }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      </Box>
    </ThemeProvider>
  );
}