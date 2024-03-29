import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import NotesIcon from '@mui/icons-material/Notes';
import { useMediaQuery } from '@mui/material';

function AnimalCard({ animal }) {

  // const isMobile = window.innerWidth <= 600;
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <div>
      <Card sx={{maxWidth: 600, marginRight: '20px', marginBottom: '20px'}}>
        <CardMedia
          className='media'
          component="img" 
          alt="Extinct Earth Image" 
          image={animal.image}
          style={{
            height: isMobile ? '20rem' : '25rem', 
            width: isMobile ? '35rem' : '26.4rem',
            maxWidth: '100%',
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
            alignItems: 'flex-start'
          }}
        >
          <Link
            to={`/creature/${animal.id}`}
            style={{color: 'black', textDecoration: 'none', fontWeight: 'bold', paddingBottom: '1rem'}}
          >
            &nbsp; <MenuIcon/>
            &nbsp; LEARN MORE
          </Link>
          <Link
            to={`/comment/${animal.id}`}
            style={{color: 'black', textDecoration: 'none', fontWeight: 'bold', paddingBottom: '1rem'}}
          >
            <NotesIcon/>
            &nbsp; COMMENT
          </Link>
        </CardActions>
      </Card>
    </div>
  )
}

export default AnimalCard


