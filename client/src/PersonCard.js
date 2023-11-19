import React, {  } from 'react'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

function PersonCard({ person }) {

    return (
        <main style={{marginBottom: '2rem'}}>
            <div style={{ padding: '1rem'}}>
                <section style={{display: 'flex', alignItems: 'center'}}>
                   <PersonIcon sx={{fontSize: '1.6rem'}}/>
                    <Typography
                        sx={{  color: 'black', fontSize: '1.6rem'}}
                    >
                       {person.username}
                    </Typography>
                </section>
                <section style={{display: 'flex', alignItems: 'center'}}>
                    <EmailIcon sx={{marginRight: '0.2rem', color: 'gray'}}/>
                    <Typography
                        variant= "h6" 
                        sx={{ color: 'gray'}}
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