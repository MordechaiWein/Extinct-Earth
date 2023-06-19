import React, { useContext } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import { Typography} from '@mui/material';
import { MyContext } from "./MyContext";
import FavoritesCard from "./FavoritesCard";



const defaultTheme = createTheme();

function Bookmark() {

    const {user} = useContext(MyContext)
    const usersAnimals = user.animals.map(animal => <FavoritesCard key={animal.id} animal={animal}/>)



    return (
        <div 
            style={{
                backgroundImage: 'url(https://i.pinimg.com/originals/7c/ea/8a/7cea8a0f915bf98901b0e912db2b54e7.jpg)', 
                backgroundSize: '100% 90%',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'bottom',
                display: 'flex',
                minHeight: '100vh',
            }}>
            <Container component="main" maxWidth="md">
                <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', marginBottom: '7rem'}}>
                    {user.animals.length > 0 ? 
                        usersAnimals
                        
                 
                        :
                        <Box 
                            style={{
                                width: '100%',
                                height: '100%', 
                                margin: "auto",
                                backgroundColor: 'white',
                                borderRadius: "1rem",
                                marginTop: '10rem'
                            }}
                            >
                            <Typography variant="h4" style={{textAlign: 'center', padding: '2rem', fontFamily: 'Montserrat sans-serif'}}>
                                The animals that you have commented on will be included in your favorites list. 
                                Your favorites list serves as a compilation of the animals you have engaged with through your comments. 
                                Kindly revisit this page once you have commented on some extinct animals.
                            </Typography>
                        </Box>
                    }
                </Box>
            </Container>
        </div>
    )
}
export default Bookmark
