import React, {  } from 'react'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import { useMediaQuery } from '@mui/material';

function PersonCard({ person }) {

    const isMobile = useMediaQuery('(max-width: 600px)');

    return (
        <main style={{marginBottom: '2rem'}}>
            <div style={{ display: isMobile ? '' : 'flex', justifyContent: isMobile ? '' : 'space-between', padding: '1rem'}}>
                <section style={{marginLeft: isMobile ? "" : "0.5rem", display: 'flex', alignItems: 'center'}}>
                   <PersonIcon sx={{fontSize: '1.6rem'}}/>
                    <Typography sx={{  color: 'black', fontSize: '1.6rem'}}>{person.username}</Typography>
                </section>
                <section style={{marginRight: isMobile ? "" : "0.5rem", display: 'flex', alignItems: 'center', color: isMobile ? 'gray' : 'black'}}>
                    <EmailIcon sx={{marginRight: '0.2rem'}}/>
                    <Typography variant= {isMobile ? "h6" : "" }
                        sx={{fontSize: isMobile ? '1.25rem' : '1.6rem'}}
                    >
                        {person.email_address}
                    </Typography>
                </section>
            </div>
            <Divider/>
        </main>
    )
}
export default PersonCard