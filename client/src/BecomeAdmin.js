import React, { useState, useContext } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography, Container, Box} from '@mui/material';
import Alert from '@mui/material/Alert';
import { useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { MyContext } from "./MyContext";

function BecomeAdmin() {

    const [thanks, setThanks] = useState('')
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState('')
    const isMobile = useMediaQuery('(max-width: 600px)');
    const { user } = useContext(MyContext)

    function handleClick() {
        setThanks('Thank you, a member of our team will reach out to you') 
        setOpen(true)
        setData('')
    }

    function handleChange(event) {
        setData(event.target.value) 
    }
    
    return (
        <div
            style={{
                backgroundImage: isMobile ? 'none' : 'url(https://fsc.org/sites/default/files/2022-08/FSC_BATS_A7RII_0105_0.png)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '100vh'
            }}
        >
            <Container maxWidth=  "md"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <div 
                    style={{
                        backgroundColor: 'white', 
                        borderRadius: '1rem', 
                        paddingBottom: '7rem', 
                        marginTop: isMobile ? "" : '10rem'
                    }}
                >
                    <Typography
                        style={{
                            fontSize: '1.8rem',
                            fontFamily: 'Nunito Sans', 
                            paddingTop: '2rem',
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }}
                    >
                        {user.username.toUpperCase()}! 🎉
                    </Typography>
                    <Typography 
                        style={{
                            fontSize: '1.8rem',
                            fontFamily: 'Nunito Sans', 
                            padding: '2rem',
                            paddingTop: '1rem',
                            textAlign: isMobile ? 'center' : ''
                        }}
                    >
                        At Extinct Earth&copy;, users can become admins and contribute to sharing animal posts and
                        extinction events on our website. 
                        If you're interested, apply by leaving your email below. Our team will reach out with further details. 
                        Join our passionate community of admins and embark on this thrilling adventure with us!
                    </Typography>
                    <Box  noValidate sx={{ mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',  margin: '0 2rem',  }}>
                        <TextField
                            margin="normal"
                            required
                            id="username"
                            placeholder='Email Address*'
                            name="email"
                            autoComplete="username"
                            onChange={handleChange}
                            value={data}
                            sx={{width: '30rem'}}
                        />
                        <Button
                            type="submit"
                            color='success'
                            variant="contained"
                            onClick={handleClick}
                            sx={{ mt: 3, mb: 2, fontWeight: 'bold', height: '3rem', color: 'white', width: '30rem'}}
                        >
                            Submit Request
                        </Button>
                        <Box sx={{width: isMobile ? '100%' : '52.9%'}}>
                            <Collapse in={open}>
                                <Alert
                                    action={
                                        <IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="small"
                                            onClick={() => {
                                            setOpen(false);
                                            }}
                                        >
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    }
                                    sx={{ mb: 2 }}
                                >
                                    {thanks}
                                </Alert>
                            </Collapse>
                        </Box>
                    </Box>
                </div>
            </Container>
        </div>
    )
}

export default BecomeAdmin


