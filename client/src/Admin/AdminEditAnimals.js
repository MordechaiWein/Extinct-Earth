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

function AdminEditAnimals({ animal }) {

    const {editAnimals} = useContext(MyContext)
    const history = useHistory()
    const [errors, setErrors] = useState([])
    const [data, setData] = useState({
        name: animal.name,
        image: animal.image,
        classification: animal.classification, 
        history: animal.history,
        time_period: animal.time_period, 
        scientific_name: animal.scientific_name,
        diet: animal.diet,
        longitude: animal.longitude,
        latitude: animal.latitude,
        fun_fact: animal.fun_fact,
        link: animal.link
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/animals/${animal.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (response.ok) {
                response.json().then(data => {
                    editAnimals(data)
                    history.push(`${data.classification}`)
                })
            } else {
                response.json().then(data => setErrors(data.errors))
            }
        })
    }

    function handleChange(event) {
        setData({...data,[event.target.name]: event.target.value})
        setErrors([])
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
            Edit extinct animal
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
              placeholder='classification'
              name="classification"
              value={data.classification}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            
              <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder='history'
              multiline
              rows={4}
              name="history"
              value={data.history}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
              <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder='time period'
              name="time_period"
              value={data.time_period}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              placeholder='scientific name'
              name="scientific_name"
              value={data.scientific_name}
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
              placeholder='diet'
              name="diet"
              value={data.diet}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder='longitude'
              name="longitude"
              value={data.longitude}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder='latitude'
              name="latitude"
              value={data.latitude}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder='fun fact'
              name="fun_fact"
              value={data.fun_fact}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder='link'
              name="link"
              value={data.link}
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

export default AdminEditAnimals
