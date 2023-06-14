import React, { useContext } from "react";
import SimpleMap from "./SimpleMap";
import { Typography, Container, Box, Button } from '@mui/material';
import { useParams } from "react-router-dom";
import { useMediaQuery } from '@mui/material';
import { MyContext } from "./MyContext";

function InformationCard() {

    const params = useParams()
    const {animals} = useContext(MyContext)
    const isMobile = useMediaQuery('(max-width: 600px)');
    const being =  animals.length > 0 ? animals.find(animal => animal.id === parseInt(params.id)) : []
    const capitalizedWord = being.id === parseInt(params.id) ? being.classification.charAt(0).toUpperCase() + being.classification.slice(1) : ''

    const imageStyleRight = isMobile
    ? { width: '100%', height: 'auto', marginRight: '2rem' }
    : { width: '40%', height: '25rem', marginRight: '2rem' };
 
    
    return (
        
      <Container style={{marginTop: '2rem', maxWidth: '90%'}}>
        
        {isMobile ? 
   
        
        
        <div style={{}}>
        <Typography variant="body1" sx={{ marginBottom: '1rem', fontFamily: 'Montserrat', color: 'rgba(0, 0, 0, 0.87)', fontSize: '1.1rem' }}>
          <Typography variant="h4"  sx={{ paddingBottom: '1.5rem', fontWeight: 'bold'}}>

            <img
          src={being.image}
          alt="Mission Image"
          style={{
            ...imageStyleRight,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '1.5rem',
            marginBottom: '1.5rem'
          }}
        />
         {being.name}
         <Typography sx={{paddingTop: '1rem',fontWeight: 'bold', fontSize: '3vw'}}>
            &nbsp;Period: {being.time_period}
         </Typography>
         <Typography sx={{fontWeight: 'bold', fontSize: '3vw'}}>
            &nbsp;Diet: {being.diet}
         </Typography>
         <Typography sx={{fontWeight: 'bold', fontSize: '3vw'}}>
            &nbsp;Other Name: {being.scientific_name}
         </Typography>
         <Typography sx={{ paddingBottom: '1.5rem', fontWeight: 'bold', fontSize: '3vw'}}>
            &nbsp;Classification: {capitalizedWord}
         </Typography>
        </Typography>
     
        {being.history}
  
           <Button 
                sx={{fontWeight: 'bold', marginLeft: '-0.5rem', marginTop: '1rem'}}
                href={being.link}
                color="success"
                >
                See More Information
             </Button>
             <SimpleMap being={being}/>
        </Typography>
     
      </div>  
        : 
        <Box style={{display: 'flex'}}>
        <img style={{width: "40rem", height: '56rem'}} src={being.image}/>
        <Typography style={{marginLeft: '2rem'}}>
            <h1 
                style={{fontWeight: 'bold', marginBottom: '3rem',fontFamily: 'Montserrat', color: '#2e7d32'}}>
                {being.id === parseInt(params.id) ? being.name.toUpperCase() : ''}
            </h1>
            <div style={{ display: 'flex'}}>
            <h4 style={{fontWeight: 'bold', color: '#2e7d32'}}>Period:</h4> 
            <h4 style={{marginBottom: '1rem'}}>&nbsp; {being.time_period}</h4>
            </div>
            <div style={{ display: 'flex'}}>
            <h4 style={{fontWeight: 'bold', color: '#2e7d32' }}>Diet:</h4> 
            <h4 style={{marginBottom: '1rem'}}>&nbsp; {being.diet}</h4>
           </div>
           <div style={{ display: 'flex'}}>
            <h4 style={{fontWeight: 'bold', color: '#2e7d32'}}>Other Name:</h4> 
            <h4 style={{marginBottom: '1rem'}}>&nbsp; {being.scientific_name}</h4>
           </div>
           <div style={{ display: 'flex'}}>
            <h4 style={{fontWeight: 'bold', color: '#2e7d32'}}>Classification:</h4> 
            <h4 style={{marginBottom: '1rem'}}>&nbsp; {capitalizedWord}</h4>
           </div>
           <div style={{}}>
            <h5 style={{fontWeight: 'bold', color: '#2e7d32'}}>Fun Fact:</h5> 
            <h5 style={{marginBottom: '2rem'}}>{being.fun_fact}</h5>
           </div>
           <Typography variant="h7" style={{ fontFamily: 'Nunito Sans', fontStyle: 'italic'}}>
            {being.history}
           </Typography>
            <Button 
                sx={{fontWeight: 'bold', marginLeft: '-0.5rem'}}
                href={being.link}
                color="success"
                variant="text"
                >
                See More Information
             </Button>
             <SimpleMap being={being}/>
           </Typography>
           
        </Box>
           
        
        }
        </Container>  
     
    )
}

export default InformationCard


// import React, { useContext } from "react";
// import SimpleMap from "./SimpleMap";
// import { Typography, Container, Box } from '@mui/material';
// import { useMediaQuery } from '@mui/material';
// import { useParams } from "react-router-dom";
// import { MyContext } from "./MyContext";

// function InformationCard() {

//   const isMobile = useMediaQuery('(max-width: 600px)');
//   const params = useParams();
//   const { animals } = useContext(MyContext);
//   const being = animals.length > 0 ? animals.find(animal => animal.id === parseInt(params.id)) : [];

//   return (
//     <Container style={{ marginTop: '2rem', maxWidth: isMobile ? '100%' :'85%' }}>
//       <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
//         <img style={{ width: isMobile ?  '100%': '40rem', height:isMobile ?  'auto': '51.5rem', maxWidth: '40rem', maxHeight: '51.5rem' }} src={being.image} alt={being.name} />
//         <Box sx={{ marginLeft: { xs: 0, md: '2rem' } }}>
//           <Typography>
//             <Typography variant={isMobile ? "h4" : "h3" } sx={{ fontWeight: 'bold', marginBottom: '3rem', fontFamily: 'Montserrat' }}>{being.name.toUpperCase()}</Typography>
//             <Typography variant="h5" sx={{ display: 'flex', fontWeight: 'bold' }}>
//               Period:&nbsp;
//               <Typography variant="h5" sx={{ marginBottom: '1rem' }}>{being.time_period}</Typography>
//             </Typography>
//             <Typography variant="h5" sx={{ display: 'flex', fontWeight: 'bold' }}>
//               Diet:&nbsp;
//               <Typography variant="h5" sx={{ marginBottom: '1rem' }}>{being.diet}</Typography>
//             </Typography>
//             <Typography variant="h5" sx={{ display: 'flex', fontWeight: 'bold' }}>
//               Other Name:&nbsp;
//               <Typography variant="h5" sx={{ marginBottom: '1rem' }}>{being.scientific_name}</Typography>
//             </Typography>
//             <Typography variant="h5" sx={{ display: 'flex', fontWeight: 'bold' }}>
//               Classification:&nbsp;
//               <Typography variant="h5" sx={{ marginBottom: '1rem' }}>{being.classification}</Typography>
//             </Typography>
//             <Typography variant="h5" sx={{ display: 'flex', fontWeight: 'bold' }}>
//               Fun Fact:&nbsp;
//               <Typography  sx={{ marginBottom: '2rem' }}>{being.fun_fact}</Typography>
//             </Typography>
//             <Typography variant="h7" sx={{ fontFamily: 'Nunito Sans', fontStyle: 'italic' }}>
//               {being.history}
//             </Typography>
//             <SimpleMap being={being} />
//           </Typography>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// export default InformationCard;