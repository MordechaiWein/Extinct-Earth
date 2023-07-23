import React from 'react';
import { Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';

function EventCard({ event }) {

  const isMobile = useMediaQuery('(max-width: 600px)');

  const imageStyleRight = isMobile
  ? { width: '100%', height: 'auto', marginRight: '2rem' }
  : { width: '40%', height: '25rem', marginRight: '2rem' };

  return (
    <>
      {isMobile ? (
        <div style={{padding: '1.5rem'}}>
        <Typography variant="body1" sx={{ marginBottom: '1rem', fontFamily: 'Montserrat', color: 'rgba(0, 0, 0, 0.87)', fontSize: '1.1rem' }}>
          <Typography variant="h4"  sx={{ paddingBottom: '1.5rem', fontWeight: 'bold', fontFamily: 'Orbitron, sans-serif'}}>
            {event.name.toUpperCase()} EXTINCTION EVENT
            <img
          src={event.image}
          alt="Mission Image"
          style={{
            ...imageStyleRight,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '1.5rem',
            marginBottom: '1.5rem'
          }}
        />
        <li style= {{fontSize: '1rem', paddingBottom: '0.5rem'}}>start date: {event.start_date}</li>
        <li style= {{fontSize: '1rem', paddingBottom: '0.5rem' }}>End date: {event.end_date}</li>
        <li style= {{fontSize: '1rem', paddingBottom: '0.5rem'}}>Cause: {event.cause}</li>
        </Typography>
           {event.description}
        </Typography>
     
      </div>
      ) : (
    <div
      style={{
        backgroundColor: '#f5f5f5',
        padding: '3%',
        marginBottom: '10px',
        marginLeft: '2%',
        marginRight: '2%'
      }}
    >
      <h1
        style={{
          fontWeight: 'bold',
          paddingBottom: '2%',
          fontFamily: 'Orbitron, sans-serif',
          textTransform: 'uppercase',
        }}
      >
       {event.name} EXTINCTION EVENT
      </h1>
      <img
        src={event.image}
        style={{
          width: '45%',
          height: 'auto',
          objectFit: 'cover',
          paddingRight: '2%',
          float: 'left',
          paddingBottom: '1.5%',
        }}
        alt="Event Image"
      />
      <div>
        <h4
          style={{
            display: 'inline',
            padding: '1%',
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: 'black',
            fontSize: '1.3rem',
            backgroundColor: 'white',
            borderRadius: '2rem'
          }}
        >
          ● Start date: <span style={{color: '#36454F'}}>{event.start_date}</span>
        </h4>
        <h4
          style={{
            display: 'inline',
            padding: '1%',
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: 'black',
            fontSize: '1.3rem',
            backgroundColor: 'white',
            borderRadius: '2rem',
            marginLeft: '0.4rem'
          }}
        >
          ● End date: <span style={{ color: '#36454F' }}>{event.end_date}</span>
        </h4>
        <h4
          style={{
            display: 'inline',
            padding: '1%',
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: 'black',
            fontSize: '1.3rem',
            backgroundColor: 'white',
            borderRadius: '2rem',
            marginLeft: '0.4rem'
          }}
        >
          ● Cause: <span style={{ color: '#36454F' }}>{event.cause}</span>
        </h4>
      </div>
      <p
        style={{
          paddingTop: '3%',
          fontSize: '1.1vw',
          fontFamily: 'Noto Serif serif',
          color: '#333333',
        }}
      >
        {event.description}
      </p>
    </div>)}
    </>
  );
}

export default EventCard;