import React, { useContext } from "react";
import { Typography, Container, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useParams } from "react-router-dom";
import { MyContext } from "./MyContext";
import Avatar from '@mui/material/Avatar';

function CommentCard() {

    const params = useParams()
    const {animals} = useContext(MyContext)
    const being =  animals.length > 0 ? animals.find(animal => animal.id === parseInt(params.id)) : [] 

    return (
        <Container>
            <img 
                style={{
                    display: 'block',
                     margin: 'auto',
                     marginTop: '5rem',
                     width: '80rem'
                    }}
                src={being.image}
             
            />

<Avatar sx={{ m: 1, bgcolor: 'warning.light' }}>
            <img 
              width="38" 
              height="38" 
              src="https://img.icons8.com/glyph-neue/64/dinosaur.png"
              alt="dinosaur"
            />
            </Avatar>
          <TextField
                    required
                    fullWidth
                    name="password"
                    placeholder='Add a comment...'
                    type="text"
                    id="password"
                    variant="filled"
                    autoComplete="current-password"
                    style={{
                        marginBottom: '2rem', 
                        marginTop: '4rem',
                        width: '100%'
                    }}
                
                />
        </Container>
    )
}

export default CommentCard