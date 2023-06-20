import React, { useContext, useState } from "react";
import { Typography, Container, Box, Divider } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useParams } from "react-router-dom";
import { MyContext } from "./MyContext";
import Avatar from '@mui/material/Avatar';
import CommentCard from "./CommentCard";
import Alert from '@mui/material/Alert';
import { useMediaQuery } from '@mui/material';



function CommentPage() {
   
    const params = useParams()
    const isMobile = useMediaQuery('(max-width: 600px)');
    const {animals, postComment, user} = useContext(MyContext)
    const being =  animals.length > 0 ? animals.find(animal => animal.id === parseInt(params.id)) : [] 
    const name = animals.length > 0 ?  user.username.split('') : ''
    const letter = name[0]
    const [errors, setErrors] = useState([])
    const [data, setData] = useState({
        text: '',
        likes: 0,
        animal_id: parseInt(params.id)
    })

    const replies = animals.length > 0 ? being.comments.map(comment => <CommentCard key={comment.id} letter={letter} comment={comment}/>) : ''

    function handleChange(event) {
        setErrors([])
        setData({...data,[event.target.name]: event.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/comments', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (response.ok) {
                response.json().then(data => {
                    postComment(data)
                    setErrors([])
                    setData({
                        text: '',
                        likes: 0,
                        animal_id: parseInt(params.id)
                    })
                })
            } else {                         
                response.json().then(data => setErrors(data.errors))
            }
        })
    }

    function stringToColor(string) {
        if (typeof string !== 'string') {
          return '#000000'; // Return a default color if the input is not a string
        }
      
        const colors = [
          '#9c27b0',
          '#ed6c02',
          '#d32f2f',
          '#9c27b0',
          '#1976d2',
          '#2e7d32',
          // Add more colors here
        ];
      
        let hash = 0;
        let i;
      
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        const index = Math.abs(hash) % colors.length;
        return colors[index];
      }

    

    return (
        <Container>
               <div style={{height: isMobile ? '0rem' : '45rem'}}> 
                <img 
                style={{
                    display: 'block', 
                    margin: 'auto', 
                    height: isMobile ?  '24.6rem' :'100%', 
                    width: '100%'
                }} 
                    src={being.image} />
            </div>
            <Typography 
                variant="h3" 
                sx={{ 
                    paddingTop: isMobile ?  '25.5rem' : '2rem',
                    
                    }}>
               {being.name}
            </Typography>
            <Typography 
                variant="h6" 
                sx={{ 
                    marginTop: '2rem',
                    padding: '2rem', 
                    borderRadius: '1rem' , 
                    backgroundColor: '#f5f5f5'
                    
                    }}>
               {being.summary}...
             
            </Typography>
             <Typography variant="h6" style={{marginLeft: '0.5rem', marginTop: '1rem'}}>
                 {animals.length > 0 ? being.comments.length : ''}
                 &nbsp;
                 {animals.length > 0 ? being.comments.length > 1 || being.comments.length === 0 ? "Comments" : "Comment" : ""}
            
             </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{my: 8, mx: -1, marginTop: '2rem'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Avatar sx={{ m: 1, bgcolor: stringToColor(user.username.slice(0, 1).toUpperCase()), fontWeight: 'bold'}}>
                      {animals.length > 0 ? letter.toUpperCase() : ''}
                      
                    </Avatar>
                    
                    <TextField
                        required
                        name="text"
                        placeholder='Add a comment...'
                        type="text"
                        id="password"
                        variant="standard"
                        value={data.text}
                        onChange={handleChange}
                        autoComplete="current-password"
                        style={{width: isMobile ? "86%" : '100%'}}
                    />
                </div>
                <div>
                    <Button 
                        type="submit" 
                        color='primary' 
                        variant="contained"
                        sx={{ mt: 0, mb: 0, fontWeight: 'bold', height: '2.7rem', color: 'white', borderRadius: '1.5rem', float: 'right', marginRight: isMobile ? "0.3rem" : ""}}
                    >
                    Comment
                    </Button> 
                    {
                        errors.map(error => 
                        <Alert severity="error" sx={{color: 'red', width: "47.5%", marginLeft: '3.9rem'}}>
                            {error}
                        </Alert>
                    )}
                </div>
            </Box>
            {replies} 
            <Divider style={{marginTop: '25rem'}}/>
        </Container>
    )
}

export default CommentPage