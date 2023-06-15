import React, { useState, useContext } from "react";
import { Typography, Container, Box, Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import TextField from '@mui/material/TextField';
import { MyContext } from "./MyContext";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

function CommentCard({ comment, letter }) {

    const {deleteComment, editComment, user } = useContext(MyContext)
    const [formFlag, setFormFlag] = useState(true)
    const [errors, setErrors] = useState([])
    const [data, setData] = useState({
        text: comment.text,
        likes: comment.likes,
        user_id: comment.user_id
    })

    const updatedLikes = data.likes + 1;

    function addLikes() {
        fetch(`/comments/${comment.id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({likes: updatedLikes})
        })
        .then(response => response.json())
        .then(data => {
            setData({...data, likes: updatedLikes})
            editComment(data)
        })
    }


    function handleClick() {
        fetch(`/comments/${comment.id}`, {
            method: "DELETE" 
        })
        .then(response => response.json())
        .then(data => deleteComment(data))
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/comments/${comment.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (response.ok) {
                response.json().then(data => {
                    editComment(data)
                    setErrors([])
                    setFormFlag(!formFlag)
             
                })
            } else {
                response.json().then(data => {
                    setErrors(data.errors)
                })
            }
        })
    }


    function handleChange(event) {
        setErrors([])
        setData({...data,[event.target.name]: event.target.value})
    }


    return (
        <div>
      
     
                  <div style={{display: 'flex', alignItems: 'center'}}>
                  <Avatar
                      sx={{
                          marginTop: '1rem', 
                          marginLeft: '0rem',
                          bgcolor: 'secondary.main',
                          fontWeight: 'bold'
                      }}>
                      {comment.user.username.slice(0, 1).toUpperCase()}
                  </Avatar>
                  <Typography variant="h7" style={{marginLeft: '1rem', fontWeight: 'bold'}}>
                      {comment.user.username}
                  </Typography>
              </div>
              { formFlag ? 
                <div style={{marginLeft: "3.9rem", marginTop: '-1rem'}}>
                    <Typography variant="h7">
                        {comment.text}
                    </Typography>
                </div>
                :
                <div style={{marginLeft: "3.9rem", marginTop: '-1rem'}}>
                   



             <Box component="form" noValidate onSubmit={handleSubmit} sx={{my: 1, mx: 0, marginTop: '-1rem'}}>
        
                  
                     <TextField
                         required
                         fullWidth
                         name="text"
                         type="text"
                         id="password"
                         variant="standard"
                         value={data.text}
                         onChange={handleChange}
                         autoComplete="current-password"
                     />
                
                 <div>
                     <Button 
                         type="submit" 
                         color='primary' 
                         variant="contained"
                         sx={{ mt: 2, mb: 0, fontWeight: 'bold',width: '', color: 'white', borderRadius: '1.5rem', float: 'right'}}
                     >
                     Save
                     </Button> 
                     {
                        errors.map(error => 
                        <Alert severity="error" sx={{color: 'red', width: "50%"}}>
                            {error}
                        </Alert>
                    )}
                     </div>
                     </Box>
                















                </div>
             }

        














        
           
           <div style={{display: 'flex', alignItems: 'center'}}>
                <ThumbUpIcon  onClick={addLikes}    className="likehover" sx={{marginLeft: '4rem', marginTop: '1rem', marginBottom: '1rem'}}/>
                <Typography style={{marginLeft: '2rem', fontWeight: 'bold', marginTop:'0.3rem'}}>
                    {comment.likes} likes
                </Typography>

        { comment.user_id === user.id ? 


                <>
                <div 
                    onClick={() => setFormFlag(!formFlag)}
                    style={{display: 'flex'}}>
                        <ModeEditOutlineOutlinedIcon className="edithover"  style={{marginLeft: '2rem', marginRight: '0.8rem', marginTop: '0.1rem'}}/>
                        <p style={{marginTop: '0.4rem'}}>Edit</p>
                    </div>
                    <div 
                    onClick={handleClick}
                    style={{display: 'flex', alignItems: 'center'}}>
                        <DeleteOutlineOutlinedIcon   className="deletehover" style={{marginLeft: '2rem', marginRight: '0.5rem', marginTop: '0.1rem'}}/>
                        <p style={{marginTop: '0.4rem'}}>Delete</p>
                    </div>
                </>

        
            : 
            
            ""
        }
         

            </div>
        </div>
    )
}
export default CommentCard