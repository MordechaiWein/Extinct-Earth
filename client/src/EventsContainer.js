import React, { useContext } from "react";
import { MyContext } from "./MyContext";
import EventCard from "./EventCard";
import { Typography, Container} from '@mui/material';

function EventsContainer() {

    const {events} = useContext(MyContext)
    const isMobile = window.innerWidth <= 600;
    const eventList = events.map(event => <EventCard key={event.id} event={event}/>)

    return (
        <div>
    <Typography 
        sx={{
            textAlign: 'center', 
            padding: isMobile ? '6rem' : '12rem',
            marginLeft: isMobile ? '1rem' : '5rem',
            marginRight: isMobile ? '1rem' : '5rem',
            backgroundImage: 'url(https://cdn.mos.cms.futurecdn.net/FAdM9sLkkfPpEQu4m4dm8a.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: isMobile ? '1.5rem' : '6rem',
            }}
        >
        EXTINCTION EVENTS
    </Typography>
     

       <Container>
       <Typography 
            style={{
                textAlign: 'center', 
                fontSize: '1.1rem', 
                margin: '0 2rem', 
                fontFamily: 'Montserrat', 
                fontStyle: 'italic', 
                color: 'rgba(0, 0, 0, 0.87)', 
                marginTop: '2rem', 
                marginBottom: '4rem'
            }}
            >
            Throughout the history of our planet, multiple extinction events have shaped life on Earth. 
            At Extinct Animals, we delve into these cataclysmic events, unraveling their causes and consequences.
            Join us in exploring the mysteries of these global upheavals that have impacted the course of evolution.
       </Typography>
       </Container>
       {/* {eventList} */}
    </div>
    )
}

export default EventsContainer