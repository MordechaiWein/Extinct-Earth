import React, { useState, useContext  } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MyContext } from "../MyContext";
import Alert from '@mui/material/Alert';
import { useHistory } from "react-router-dom";

const defaultTheme = createTheme();

function AdminEditEvents({event}) {

    const {editEvents} = useContext(MyContext)
    const history = useHistory()
    const [errors, setErrors] = useState([])
    const [data, setData] = useState({
        name: event.name,
        image: event.image,
        description: event.description, 
        start_date: event.start_date,
        end_date: event.end_date, 
        cause: event.cause
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/events/${event.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (response.ok) {
                response.json().then(data => {
                    editEvents(data)
                    history.push("/Extinction Events")
                })
            } else {
                response.json().then(data => setErrors(data.errors))
            }
        })
    }

    function handleChange(event) {
        setErrors([])
        setData({...data,[event.target.name]: event.target.value})
    }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column'
         
          }}
        >
          <Typography component="h1" variant="h5">
            Edit extinction event
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder='name'
              name="name"
              value={data.name}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
              <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder='image'
              name="image"
              value={data.image}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
              <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder='description'
              multiline
              rows={4}
              name="description"
              value={data.description}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
              <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder='start date'
              name="start_date"
              value={data.start_date}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              placeholder='end date'
              name="end_date"
              value={data.end_date}
              onChange={handleChange}
              type="text"
              id="password"
              autoComplete="current-password"
            />
              <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder='cause'
              name="cause"
              value={data.cause}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 , fontWeight: 'bold', padding: '0.8rem'}}
            >
              Submit
            </Button>
            {errors.map(error => 
                <Alert 
                  severity="error"
                  sx={{color: 'red', marginBottom: '1rem'}}
                >
                  {error}
                </Alert>
              )}
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}

export default AdminEditEvents