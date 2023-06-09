import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';


const AboutPage = () => {

    const isMobile = useMediaQuery('(max-width: 600px)');

    const imageStyle = isMobile
  ? { width: '40%', height: 'auto', marginLeft: '2rem' }
  : { width: '40%', height: '25rem', marginLeft: '2rem' };

  const imageStyleRight = isMobile
  ? { width: '40%', height: 'auto', marginRight: '2rem' }
  : { width: '40%', height: '25rem', marginRight: '2rem' };

  return (
    <div>
      {/* Header section */}
      <header>
        <Typography variant="h4" align="center" sx={{ marginBottom: '1rem' }}>
        </Typography>
        <img 
          src="https://images.pexels.com/photos/7176736/pexels-photo-7176736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Header Image"
          style={{ width: '91%', height: 'auto', display: 'block', margin: 'auto', maxHeight: '40rem' }}
        />
      </header>
       <Typography
            variant="h4" 
            align='center'
            style={{marginBottom: '1rem', marginTop: '3rem', fontFamily: 'Montserrat', fontWeight: 'bold'}}>
         Our Mission:
       </Typography>
       <Container>
       <Typography 
            style={{textAlign: 'center', fontSize: '1.1rem', margin: '0 2rem', fontFamily: 'Montserrat', color: 'rgba(0, 0, 0, 0.87)'}}>
            At Extinct Animals, our mission is to celebrate and remember the incredible creatures that once roamed our planet. 
            Through storytelling and education, we bring their captivating stories back to life. Join us in exploring 
            the wonders of the past and discovering the rich diversity of extinct animals.
       </Typography>
       </Container>
      
      {/* Main content section */}
      <Container sx={{ marginTop: '6rem' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2rem',
            backgroundColor: '#f5f5f5',
            padding: "1rem"
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography 
                variant="h4" 
                gutterBottom 
                sx={{fontWeight: 'bold'}}>
               Did You Know?
            </Typography>
            <Typography 
                variant="body1" 
                sx={{ 
                    marginBottom: '1rem',
                    fontFamily: 'Montserrat', 
                    color: 'rgba(0, 0, 0, 0.87)', 
                    fontSize: '1.1rem',
                    }}
                >
               Did you know that 99.9% of animals that have ever lived are now extinct? 
               It's a staggering statistic that highlights the incredible diversity and evolution of life on our planet. 
               Throughout millions of years, countless species have emerged, thrived, and eventually disappeared, 
               leaving behind only fragments of their existence. This rich history of extinctions reminds us of the ever-changing 
               nature of life and the importance of preserving and protecting the fragile web of biodiversity that remains. 
               By exploring the stories of these extinct animals, we can gain a deeper appreciation for the interconnectedness of all living beings 
               and the need to conserve our natural world for future generations.
            </Typography>
          </Box>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Lonesome_George_in_profile.png"
            alt="Welcome Image"
            style={imageStyle}
          />
        </Box>

        {/* Our Mission section */}
        <Box sx={{ backgroundColor: '#f9f9f9', padding: '1rem', marginBottom: '2rem' }}>
         
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2rem',
              flexDirection: isMobile ? 'column' : 'row',
            }}
          >
            <img
              src="https://www.rainforesttrust.org/app/uploads/2021/09/GOldenToad-1000x667.jpeg"
              alt="Mission Image"
              style={imageStyleRight}
            />
            <Typography variant="body1"  sx={{ marginBottom: '1rem', fontFamily: 'Montserrat', color: 'rgba(0, 0, 0, 0.87)', fontSize: '1.1rem' }}>
            <Typography variant="h4"  sx={{paddingBottom: '1rem',fontWeight: 'bold' }}>
              Discover the Wonders of Extinct Animals
            </Typography >
              Prepare to embark on a captivating journey through time as we delve into the fascinating world of creatures 
              that once roamed our planet. Explore the rich diversity of extinct species, 
              from mighty dinosaurs to graceful mammals and intricate insects. Immerse yourself in their stories, 
              uncover their unique features, and marvel at their extraordinary adaptations. Through stunning visuals, 
              engaging articles, and interactive exhibits, you'll gain a deeper understanding of these remarkable beings 
              and the importance of preserving Earth's biodiversity. Join us as we unravel the mysteries of the past and 
              celebrate the wonders of extinct animals.
            </Typography>
          </Box>
        </Box>
             {/* Contact Us section */}
             <Box sx={{ backgroundColor: '#f5f5f5', padding: '1rem' }}>
        
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: isMobile ? 'column' : 'row',
              marginBottom: '2rem',
            }}
          >
            <img
              src="https://images.csmonitor.com/csm/2015/10/938806_1_ibex_standard.jpg?alias=standard_900x600nc"
              alt="Contact Image"
              style={imageStyleRight}
            />
            <Typography variant="body1" sx={{ marginBottom: '1rem', fontFamily: 'Montserrat', color: 'rgba(0, 0, 0, 0.87)', fontSize: '1.1rem' }}>
            <Typography variant="h4" sx={{paddingBottom: '1rem',fontWeight: 'bold' }}>
               Discover, Learn, and Explore the World of Extinct Animals
            </Typography>
                At Extinct Animals, we strive to provide an immersive and educational experience that sparks 
                curiosity and appreciation for the incredible creatures that have vanished from our world. 
                Delve into our extensive collection of articles, photographs, and interactive content to deepen 
                your knowledge and understanding of extinct animals. Whether you're a passionate enthusiast, 
                a student eager to learn, or simply curious about the wonders of the past, 
                we hope you enjoy your journey with us. Join us in preserving the legacy of 
                these extraordinary beings and fostering a sense of wonder for generations to come.
            </Typography>
          </Box>
        </Box>
      </Container>
      
      {/* Footer section */}
      <footer style={{ backgroundColor: '#1b232E', padding: '1rem', marginTop: '2rem', color: 'white', textAlign: 'center' }}>
        <Typography variant="body2" align="center">
          &copy; 2023 Extinct Animals. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default AboutPage;
