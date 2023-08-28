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
                backgroundImage: isMobile ? 'none' : 'url(https://extinct-bucket.s3.amazonaws.com/FSC_BATS_A7RII_0105_0.png)',
                backgroundSize: isMobile ? '' : 'cover',
                backgroundRepeat: isMobile ? '' : 'no-repeat',
                backgroundPosition: isMobile ? '' : 'center',
                minHeight: isMobile ? '' : '100vh'
            }}
        >
            <Container component="main" maxWidth=  "md"
                style={{
                    display:  isMobile ? '' : 'flex',
                    justifyContent: isMobile ? '' :  'center',
                    alignItems: isMobile ? '' : 'center'
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
                    // variant = "h5"
                        style={{
                            fontSize: '1.8rem',
                            fontFamily: 'Nunito Sans', 
                            paddingTop: '2rem',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            wordWrap: 'break-word',
                        }}
                    >
                       {user.username.toUpperCase()}! 🎉 
                    </Typography>
                    <Typography 
                        style={{
                            fontSize: '1.8rem',
                            fontFamily: 'Nunito Sans', 
                            paddingTop: '1rem',
                            paddingBottom: '2rem',
                            paddingLeft: isMobile ? '0rem' : '2rem',
                            paddingRight: isMobile ? '0rem' : '2rem',
                            textAlign: isMobile ? 'center' : ''
                        }}
                    >
                        At Extinct Earth&copy;, users can become admins and contribute to sharing animal posts and
                        extinction events on our website. 
                        If you're interested, apply by leaving your email below. Our team will reach out with further details. 
                        Join our passionate community of admins and embark on this thrilling adventure with us!
                    </Typography>
                    <Box  noValidate 
                        sx={{ 
                            mt: 1, 
                            display: isMobile ? '' : 'flex', 
                            flexDirection: isMobile ? '' : 'column',
                            alignItems: isMobile ? '' : 'center', 
                            margin: isMobile ? '' : '0 2rem',  
                        }}
                    >
                        {isMobile ? 
                            ( <>
                            <TextField
                                margin="normal"
                                required
                                id="username"
                                placeholder='Email Address*'
                                name="email"
                                autoComplete="username"
                                onChange={handleChange}
                                value={data}
                                fullWidth
                            />
                            <Button
                                type="submit"
                                color='success'
                                variant="contained"
                                fullWidth
                                onClick={handleClick}
                                sx={{ 
                                    mt: 3,
                                    mb: 2, 
                                    fontWeight: 'bold', 
                                    height: '3rem', 
                                    color: 'white', 
                                }}
                            >
                                Submit Request
                            </Button>
                            </>
                            ):(
                            <>
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
                                sx={{ 
                                    mt: 3,
                                    mb: 2, 
                                    fontWeight: 'bold', 
                                    height: '3rem', 
                                    color: 'white', 
                                    width: '30rem'
                                }}
                            >
                                Submit Request
                            </Button>
                            </>)
                        }
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
                                    sx={{ mb: 2, textAlign: 'center' }}
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

// https://fsc.org/sites/default/files/2022-08/FSC_BATS_A7RII_0105_0.png

