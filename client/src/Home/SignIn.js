// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="common.white" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="">
//         Extinct Earth
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }



// const defaultTheme = createTheme({
//   palette: {
//     primary: {
//       main: '#00000000', 
//     },
//     secondary: {
//       main: '#ff9800', 
//     },
//   },
// });


// function SignIn() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };


//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Grid container component="main" sx={{ height: '100vh'}}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: 'url(https://wallpaperaccess.com/full/4457087.jpg)',
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{backgroundColor: '#0f0f0f'}}>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center'
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'warning.light' }}>
//             <img 
//               width="38" 
//               height="38" 
//               src="https://img.icons8.com/glyph-neue/64/dinosaur.png"
//               alt="dinosaur"
//             />
//             </Avatar>
//             <Typography component="h1" variant="h4" sx={{color: 'white', fontWeight: 'bold'}}>
//               Sign In
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 placeholder='Username*'
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//                 sx={{backgroundColor: 'white', borderRadius: '0.3rem'}}
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 placeholder='Password*'
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 sx={{backgroundColor: 'white', borderRadius: '0.3rem'}}
//               />
           
//               <Button
//                 type="submit"
//                 fullWidth
//                 color='secondary'
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2, fontWeight: 'bold', height: '3rem', color: 'white' }}
//               >
//                 Sign In
//               </Button>
//               <Copyright sx={{ mt: 5 }} />
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }

// export default SignIn



import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
//

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
//
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: isMobile ? '100%' : '100vh' }}>
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
            //
            height: isMobile ? '100%' : 'auto',
            //
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{backgroundColor: '#0f0f0f'}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              //
              height: isMobile ? '100%' : 'auto',
              //

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
                id="email"
                placeholder='Username*'
                name="email"
                autoComplete="email"
                autoFocus
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
                color='secondary'
                variant="contained"
                sx={{ mt: 3, mb: 2, fontWeight: 'bold', height: '3rem', color: 'white' }}
              >
                Sign In
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignIn

