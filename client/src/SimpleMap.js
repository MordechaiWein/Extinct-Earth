import React from "react";
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@mui/icons-material/Room';

import { useMediaQuery } from '@mui/material';

const AnyReactComponent = ({ icon }) => <div>{icon}</div>;

function SimpleMap({ being }) {

  const isMobile = useMediaQuery('(max-width: 600px)');
  const defaultProps = {
    center: {
      lat: being.longitude ? parseFloat(being.latitude) : 0,
      lng: being.longitude ? parseFloat(being.longitude) : 0
    // lat: 21.3891,
    //  lng: 39.8579
    },
    zoom: 8
  };
 
  return (
    // Important! Always set the container height explicitly
    <div style={{
        marginTop: isMobile ? '1rem' : '0rem',
        height: '16.9rem',
        width: isMobile ? "100%" : '50%',
        paddingBottom: isMobile ? '2rem' : '0rem'
         }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDKPuvYfP7KIZzdMTGMfIj2ZiKD5HKAS-Y" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={being.longitude ? parseFloat(being.latitude) : 0 }
          lng={being.longitude ? parseFloat(being.longitude) : 0 }
          // lat={21.3891}
          // lng={39.8579}
          icon={<RoomIcon sx={{ fontSize: '60px', color: 'red', transform: 'translate(-50%, -100%)' }} />}
        />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;
