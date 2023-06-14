import React from "react";
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@mui/icons-material/Room';

import { useMediaQuery } from '@mui/material';

const AnyReactComponent = ({ icon }) => <div>{icon}</div>;

function SimpleMap({ being }) {

  const isMobile = useMediaQuery('(max-width: 600px)');
  const defaultProps = {
    center: {
    //   lat: parseFloat(being.latitude),
    //   lng: parseFloat(being.longitude)
    lat: 21.3891,
     lng: 39.8579
    },
    zoom: 8
  };
 
  return (
    // Important! Always set the container height explicitly
    <div style={{
        marginTop: '1rem',
        height: '14.9rem',
        width: isMobile ? "100%" : '50%'
         }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDKPuvYfP7KIZzdMTGMfIj2ZiKD5HKAS-Y" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
        //   lat={parseFloat(being.latitude)}
        //   lng={parseFloat(being.longitude)}
          lat={21.3891}
          lng={39.8579}
          icon={<RoomIcon sx={{ fontSize: '60px', color: 'red', transform: 'translate(-50%, -100%)' }} />}
        />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;
