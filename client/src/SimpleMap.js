import React from "react";
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@mui/icons-material/Room';

import { useMediaQuery } from '@mui/material';

const AnyReactComponent = ({ icon }) => <div>{icon}</div>;

function SimpleMap({ being }) {

  const isMobile = useMediaQuery('(max-width: 600px)');
  const isMediumScreen = useMediaQuery('(min-width: 601px) and (max-width: 1700px)');
  const defaultProps = {
    center: {
      lat: being.longitude ? parseFloat(being.latitude) : 0,
      lng: being.longitude ? parseFloat(being.longitude) : 0
    // lat: 21.3891,
    //  lng: 39.8579
    },
    zoom: 8
  };
 
  let mapWidth = ''
  if (isMobile) {
    mapWidth = '100%'
  } else if (isMediumScreen) {
    mapWidth = '100%'
  } else {
    mapWidth = '50%'
  }
  return (
    // Important! Always set the container height explicitly
    <div style={{
        marginTop: isMobile ? '1rem' : '0rem',
        height: isMediumScreen ? '30rem' : '16.9rem',
        width: mapWidth,
        paddingBottom: isMobile ? '2rem' : '0rem'
         }}
    >
      <GoogleMapReact
        // bootstrapURLKeys={{ key: "AIzaSyDKPuvYfP7KIZzdMTGMfIj2ZiKD5HKAS-Y" }}
        bootstrapURLKeys={{ key: "AIzaSyDx-Oq0Uo7ZPjxqvm4JgSlK_ccdzlGFlhk" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={being.longitude ? being.latitude : 0 }
          lng={being.longitude ? being.longitude : 0 }
          // lat={21.3891}
          // lng={39.8579}
          icon={<RoomIcon sx={{ fontSize: '60px', color: 'red', transform: 'translate(-50%, -100%)' }} />}
        />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;
