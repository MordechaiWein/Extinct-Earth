import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useHistory } from "react-router-dom";

function ErrorPage() {

    const history = useHistory()

    useEffect(() => {
        setTimeout(() => history.push("/"), 4000)
    }, [])

    return (
        <main style={{backgroundColor: 'black', minHeight: '100vh', display: 'flex'}}>
            <Container maxWidth="sm" 
                sx={{
                    marginTop: 25,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <img width="70" height="70" src="https://img.icons8.com/fluency/48/dinosaur.png" alt="dinosaur"/>
                <Typography variant="h4" sx={{color: 'white', fontFamily: 'Montserrat', paddingTop: '1.5rem'}}>EXTINCT EARTH</Typography>
                <Typography variant="h7" sx={{color: 'white'}}>Explore the world of extinct animals</Typography>
                <Typography variant="h5" sx={{color: 'white', paddingTop: '1.5rem'}}>Sorry for the inconvenience</Typography>
                <Typography variant="h5" sx={{color: 'white', paddingTop: '1rem'}}>File or Page was not found</Typography>
                <Typography variant="h5" sx={{color: 'white', paddingTop: '1rem', textAlign: 'center'}}>
                    You will be redirected automatically to the Main Page
                </Typography>
            </Container>
        </main>
    )

}

export default ErrorPage
