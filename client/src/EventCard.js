import React from 'react';

function EventCard({ event }) {
  return (
    <div
      style={{
        backgroundColor: '#f5f5f5',
        padding: '3%',
        marginBottom: '10px'
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
          width: '50%',
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
            fontSize: '1.3rem'
          }}
        >
          ● Start date: <span style={{color: '#36454F' }}>{event.start_date}</span>
        </h4>
        <h4
          style={{
            display: 'inline',
            padding: '1%',
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: 'black',
            fontSize: '1.3rem'
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
            fontSize: '1.3rem'
          }}
        >
          ● Cause: <span style={{ color: '#36454F' }}>{event.cause}</span>
        </h4>
      </div>
      <p
        style={{
          paddingTop: '3%',
          fontSize: '1.1vw',
          fontFamily: 'Montserrat',
          color: '#333333',
        }}
      >
        {event.description}
      </p>
    </div>
  );
}

export default EventCard;