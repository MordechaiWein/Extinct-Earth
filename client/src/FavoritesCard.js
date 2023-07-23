import React from "react";
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Link } from "react-router-dom";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useMediaQuery } from '@mui/material';


function FavoritesCard({ animal }) {

  const isMobile = useMediaQuery('(max-width: 600px)');

  const capitalizedWord = animal.classification.charAt(0).toUpperCase() + animal.classification.slice(1) 

  return (
    <Container component="main" maxWidth="md">
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {isMobile ? 
        
        <Box
        sx={{
          width: '100%',
          height: 'auto',
          margin: "auto",
          backgroundColor: 'white',
          borderRadius: "1rem",
          marginTop: '2rem',
          padding: '1rem',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <img
          style={{ width: '100%', height: '20rem', marginBottom: '1rem', borderRadius: '0.5rem' }}
          src={animal.image}
          alt={animal.name}
        />
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', marginLeft: { md: '1rem' } }}>
          <Typography variant="h5" style={{ fontFamily: 'Montserrat' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>{animal.name.toUpperCase()}</span>
              <FavoriteOutlinedIcon style={{ color: '#FE251B', fontSize: '2rem'}} />
            </div>
          </Typography>

          <Typography variant="h6" style={{ marginTop: '1rem', fontStyle: 'italic' }}>
            {capitalizedWord}
          </Typography>

          <Typography variant="h6" style={{ marginTop: '1rem', fontStyle: 'italic' }}>
            {animal.time_period}
          </Typography>

          <Typography variant="h6" style={{ marginTop: '1rem', fontStyle: 'italic' }}>
            {animal.diet}
          </Typography>

          <Typography variant="h6" style={{ marginTop: '1rem', fontStyle: 'italic' }}>
            {animal.scientific_name}
          </Typography>


    

          <Link
            to={`/creature/${animal.id}`}
            style={{ color: '#2e7d32', textDecoration: 'none', fontSize: '1.1rem', marginTop: '1rem' }}
          >
            VIEW COMPLETE DETAILS
            <ArrowCircleRightIcon style={{ marginLeft: '0.5rem', fontSize: '2rem', marginBottom: '0.32rem' }} />
          </Link>
        </Box>
      </Box>
          : 

          <Box
          sx={{
            width: '100%',
            height: 'auto',
            margin: "auto",
            backgroundColor: 'white',
            borderRadius: "1rem",
            marginTop: '2rem',
            padding: '1rem'
          }}
        >
          <img
            style={{ width: '40%', height: '20rem', marginBottom: '1rem', float: 'left', marginRight: '1rem'}}
            src={animal.image}
            alt={animal.name}
          />
          <Box sx={{ flex: 1, marginLeft: '0rem'  }}>
            <Typography variant="h5" style={{ fontFamily: 'Montserrat' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>{animal.name.toUpperCase()}</span>
                
                <FavoriteOutlinedIcon style={{ color: '#FE251B', fontSize: '2rem', marginBottom:'0.5rem' }} />
              </div>
            </Typography>

            <Typography variant="h6" style={{ marginTop: '1rem', fontStyle: 'italic' }}>
              {capitalizedWord}
            </Typography>

            <Typography variant="h6" style={{ marginTop: '1rem', fontStyle: 'italic' }}>
              {animal.time_period}
            </Typography>

            <Typography variant="h6" style={{ marginTop: '1rem', fontStyle: 'italic' }}>
              {animal.diet}
            </Typography>

            <Typography variant="h6" style={{ marginTop: '1rem', fontStyle: 'italic' }}>
              {animal.scientific_name}
            </Typography>

            <Typography variant="h6" style={{ marginTop: '1rem', fontStyle: 'italic' }}>
              {animal.fun_fact}
            </Typography>

            <Typography variant="h6" style={{ marginTop: '2rem', fontStyle: 'italic' }}>
              {animal.history.slice(0, 300)}...
            </Typography>

            <Link
              to={`/creature/${animal.id}`}
              style={{ color: '#2e7d32', textDecoration: 'none', fontSize: '1.1rem', marginTop: '1rem' }}
            >
              VIEW COMPLETE DETAILS
              <ArrowCircleRightIcon style={{ marginLeft: '0.5rem', fontSize: '2rem', marginBottom: '0.32rem' }} />
            </Link>
          </Box>
        </Box>
        }
       
      </Box>
    </Container>
  );
}

export default FavoritesCard;