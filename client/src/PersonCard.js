import React, {  } from 'react'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';

function PersonCard({ person }) {

    const isMobile = useMediaQuery('(max-width: 600px)');

    return (
        <main style={{marginBottom: '2rem'}}>
            <div style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <section>
                    <Typography
                        variant= {isMobile ? "h6" : "h5"}
                        sx={{  color: 'black', marginLeft: '1.5rem' }}
                    >
                        + {person.username}
                    </Typography>
                </section>
                <section>
                    <Typography
                        variant= {isMobile ? "h6" : "h5"}
                        sx={{ color: 'black', textAlign: 'right', marginRight: '1.5rem'}}
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