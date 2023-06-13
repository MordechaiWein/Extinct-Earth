import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import NotesIcon from '@mui/icons-material/Notes';

function AnimalCard({ animal}) {

  const isMobile = window.innerWidth <= 600;

  return (

<div>
    <Card sx={{ maxWidth: 600, marginRight: '20px', marginBottom: '20px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={animal.image}
        style={{
          height: isMobile ? '20rem' : '25rem', 
          width: isMobile ? '31rem' : '26.4rem'
        }}
      />
      <CardContent>
        <Typography 
            gutterBottom 
            variant="h5" 
            component="div"
            sx={{fontWeight: 'bold'}}
        >
        {animal.name}
        </Typography>
      </CardContent>
      <CardActions 
       sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
      >
     
        <Link style={{color: 'black', textDecoration: 'none', fontWeight: 'bold', paddingBottom: '1rem'}}> 
         &nbsp; <MenuIcon/>
        &nbsp; LEARN MORE
        </Link>
        <Link style={{color: 'black', textDecoration: 'none', fontWeight: 'bold', paddingBottom: '1rem'}}> 
        <NotesIcon/>
        &nbsp; COMMENT
        </Link>
      
      </CardActions>
    </Card>
    </div>

  );
}

export default AnimalCard
