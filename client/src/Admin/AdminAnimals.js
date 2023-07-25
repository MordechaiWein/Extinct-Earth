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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const defaultTheme = createTheme();

function AdminAnimals() {

    const {setAnimals, animals} = useContext(MyContext)
    const history = useHistory()
    const [errors, setErrors] = useState([])
    const [historyLength, setHistoryLength] = useState(null)
    const [data, setData] = useState({
        name: '',
        image: '',
        classification: '', 
        history: '',
        time_period: '', 
        scientific_name: '',
        diet: '',
        longitude: '',
        latitude: '',
        fun_fact: '',
        link: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/animals", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (response.ok) {
                response.json().then(data => {
                    setAnimals([...animals, data])
                    history.push(`animals/${data.classification}`)
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

    function handleHistoryChange(event) {
      if (event.target.value.length <= 1265) {
        setData({...data,[event.target.name]: event.target.value})
        setHistoryLength(null)
      } else {
        const allowedHistory = event.target.value.slice(0, 1265)
        setData({...data,[event.target.name]: allowedHistory})
        setHistoryLength('History length exceeded')   
      }
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
            Add an extinct animal here
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
              onChange={handleHistoryChange}
              autoComplete="email"
              autoFocus
            />
              {!historyLength ? 
                '' 
                : 
                <p 
                  style={{
                    color: 'red', 
                    fontStyle: 'italic', 
                    }}
                >
                  <ErrorOutlineIcon sx={{marginBottom: '0.2rem'}}/>
                  {historyLength}
                </p>
              }
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
              autoComplete="email"
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

           {/* <FormControl 
                variant="standard" 
                sx={{ marginBottom: '2rem', minWidth: 190, fontWeight: 'bold'}}
              >
                {data.classification === '' ? <InputLabel shrink={false} >classification</InputLabel> : ''}
                  <Select 
                    onChange={handleChange} 
                    name='classification'
                    value={data.classification}
                    sx={{marginTop: '1rem'}}
                  >
                    <MenuItem value='fish'>fish</MenuItem>
                    <MenuItem value='mammal'>mammal</MenuItem>
                    <MenuItem value='reptile'>reptile</MenuItem>
                    <MenuItem value='bird'>bird</MenuItem>
                    <MenuItem value='insect'>insect</MenuItem>
                    <MenuItem value='amphibian'>amphibian</MenuItem>
                  </Select>
              </FormControl> */}

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

export default AdminAnimals









