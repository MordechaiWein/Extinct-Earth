import React, { useContext } from "react";
import SimpleMap from "./SimpleMap";
import CircularProgress from '@mui/material/CircularProgress';
import { Typography, Container, Box} from '@mui/material';
import { useParams } from "react-router-dom";
import { useMediaQuery } from '@mui/material';
import { MyContext } from "./MyContext";


function InformationCard() {

    const params = useParams()
    const {animals, setAnimals, setUser} = useContext(MyContext)
    const isMobile = useMediaQuery('(max-width: 600px)');
    const being =  animals.length > 0 ? animals.find(animal => animal.id === parseInt(params.id)) : []
    const capitalizedWord = being.id === parseInt(params.id) ? being.classification.charAt(0).toUpperCase() + being.classification.slice(1) : ''
    const imageStyleRight = isMobile
    ? { width: '100%', height: 'auto', marginRight: '2rem' }
    : { width: '40%', height: '25rem', marginRight: '2rem' };

    function handleClick() {
        fetch('/me')
        .then(response => response.json())
        .then(data => setUser(data))

        fetch('/animals')
        .then(response => response.json())
        .then(data => setAnimals(data))
    }


  
    return (
        <Container style={{marginTop: isMobile ? '0rem' : '2rem', maxWidth: isMobile ? '100%' : '90%'}}>
            {isMobile ? (
                <div>
                    <Typography 
                        variant="body1" 
                        sx={{ marginBottom: '1rem', fontFamily: 'Montserrat', color: 'rgba(0, 0, 0, 0.87)', fontSize: '1.1rem' }}>
                        <Typography variant="h4"  sx={{ paddingBottom: '1.5rem', fontWeight: 'bold'}}>
                            <img
                                src={being.image}
                                alt="Mission Image"
                                style={{
                                    ...imageStyleRight,
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    marginBottom: '1.5rem'
                                }}
                            />
                            {being.name}
                            <Typography sx={{paddingTop: '1rem', paddingBottom: '0.5rem', fontWeight: 'bold', fontSize: '3vw'}}>
                                &nbsp;Period: {being.time_period}
                            </Typography>
                            <Typography sx={{fontWeight: 'bold', paddingBottom: '0.5rem', fontSize: '3vw'}}>
                                &nbsp;Diet: {being.diet}
                            </Typography>
                            <Typography sx={{fontWeight: 'bold', paddingBottom: '0.5rem', fontSize: '3vw'}}>
                                &nbsp;Other Name: {being.scientific_name}
                            </Typography>
                            <Typography sx={{ paddingBottom: '1.5rem', fontWeight: 'bold', fontSize: '3vw', paddingBottom: '0.5rem',}}>
                                &nbsp;Classification: {capitalizedWord}
                            </Typography>
                        </Typography>
                        {being.history}
                        <div style={{ paddingTop: '0.5rem'}}>
                            <a 
                                style={{fontWeight: 'bold', textDecoration: 'none', color: '#2e7d32'}}
                                href={being.link}
                                onClick={handleClick}
                            >
                            See More Information
                            </a>
                        </div>
                        { being.latitude && being.longitude ? 

                            <SimpleMap being={being}/>
                                : 
                            "Loading..."
                        }
                    </Typography>
                </div>  
                ) : (
                <>
                    {being.name && being.image && being.classification ? 
                        (<Box style={{display: 'flex', height: '56.1rem'}}>
                            <img style={{width: "40rem", height: '', objectFit: 'cover'}} src={being.image}/>
                            <Typography style={{marginLeft: '2rem', width: '100%'}}>
                                <h1 
                                    style={{fontWeight: 'bold', marginBottom: '3rem',fontFamily: 'Montserrat', color: ''}}>
                                    {being.id === parseInt(params.id) ? being.name.toUpperCase() : ''}
                                </h1>
                                <div style={{ display: 'flex', alignItems: 'baseline'}}>
                                    <h4 style={{fontWeight: 'bold', color: ''}}>Classification:</h4> 
                                    <h5 style={{marginBottom: '1rem', fontStyle: 'italic'}}>&nbsp; {capitalizedWord}</h5>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'baseline'}}>
                                    <h4 style={{fontWeight: 'bold', color: ''}}>Other Name:</h4> 
                                    <h5 style={{marginBottom: '1rem', fontStyle: 'italic'}}>&nbsp; {being.scientific_name}</h5>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'baseline'}}>
                                    <h4 style={{fontWeight: 'bold', color: ''}}>Period:</h4> 
                                    <h5 style={{marginBottom: '1rem', fontStyle: 'italic'}}>&nbsp; {being.time_period}</h5>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'baseline'}}>
                                    <h4 style={{fontWeight: 'bold', color: '' }}>Diet:</h4> 
                                    <h5 style={{marginBottom: '1rem', fontStyle: 'italic'}}>&nbsp; {being.diet}</h5>
                                </div>
                                <div>
                                    <h5 style={{fontWeight: 'bold', fontStyle: 'italic'}}>Fun Fact:</h5> 
                                    <h5 style={{marginBottom: '2rem', fontStyle: 'italic'}}>{being.fun_fact}</h5>
                                </div>
                                <Typography style={{ fontFamily: '', fontSize: '100%'}}>
                                    <div style={{height: '14rem', width: '100%'}}>
                                        {being.history}
                                    </div>
                                </Typography>
                                <div style={{ paddingTop: '0.5rem', paddingBottom: '0.44rem'}}>
                                    <a style={{fontWeight: 'bold', textDecoration: 'none', color: '#0288d1'}}
                                    href={being.link}
                                    onClick={handleClick}
                                    >
                                    See More Information
                                    </a>
                                </div>
                                <div style={{ marginTop: '0.5rem'}}>
                                    {being.latitude && being.longitude ? 
                                        <SimpleMap being={being}/>
                                        : 
                                        "Loading..."
                                    }
                                </div>
                            </Typography>
                        </Box>
                        ):(
                        <>
                            <Box 
                                sx={{
                                    width: '5rem',
                                    margin: 'auto',
                                    marginTop: '25rem'
                                }}
                            >
                                <CircularProgress sx={{color: 'green'}}/>
                            </Box>
                                <h3 
                                    style={{
                                        textAlign: 'center',
                                        marginTop: '1rem',
                                        marginRight: '1rem'
                                    }}
                                >    Loading...
                                </h3>
                        </>)
                    }

                </>
            )}
        </Container>  
    )
}

export default InformationCard