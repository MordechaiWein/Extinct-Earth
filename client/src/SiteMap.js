import React, { useContext } from 'react'
import Typography from '@mui/material/Typography';
import { MyContext } from "./MyContext";
import PersonCard from './PersonCard'


function SiteMap() {

    const { people } = useContext(MyContext)
    const peopleList = people.map(person => <PersonCard key={person.id} person={person}/> )

    return (

        <main>
            <section
                style={{
                    backgroundColor: 'black',
                    minHeight: '48.5vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',  
                }}
            >
                <h1>🦖🦕</h1>
                <Typography
                    variant="h3"
                    sx={{ fontFamily: 'Montserrat', color: 'white', textAlign: 'center' }}
                >
                    The following people have joined Extinct Earth!
                </Typography>
                <Typography
                    variant="h5"
                    color="white"
                    sx={{textAlign: 'center', paddingTop: '2rem' }}
                >
                    {`Number of people who have joined: ${people.length}`}
                </Typography>
            </section>
            <section style={{marginTop: '5rem'}}>
                {peopleList}
            </section>  
        </main>
    )
}
export default SiteMap