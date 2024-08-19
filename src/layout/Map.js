import React, { useState, useRef } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Image from 'next/image';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];

const MapSection = ({ address }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: '',
    libraries,
  });

  const mapRef = useRef(null);

  const [center, setCenter] = useState({
    lat: 37.7749,
    lng: -122.4194,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps...</div>;

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Image src="/hero-image.jpg" alt="Hero Image" style={{ width: '80%', marginTop: '2rem' }} />
      <Container maxWidth="md">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '400px' }}
          center={center}
          zoom={15}
          onLoad={(map) => {
            // Geocode the address to get latitude and longitude
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address }, (results, status) => {
              if (status === 'OK') {
                const { lat, lng } = results[0].geometry.location;
                setCenter({ lat, lng });
              }
            });
          }}
        >
          <Marker position={center} />
        </GoogleMap>
        <Button variant="contained" color="primary">Visit Us</Button>
      </Container>
    </Box>
  );
};

export default MapSection;




// Location<br>9303 Cameron Rd, Austin, TX 78752 </a></h3>		
// 			<iframe loading="lazy"
// 					src="https://maps.google.com/maps?q=9309%20Cameron%20Rd%2C%20%20Austin%2C%20TX%2078752&#038;t=m&#038;z=16&#038;output=embed&#038;iwloc=near"
// 					title="9309 Cameron Rd,  Austin, TX 78752"
// 					aria-label="9309 Cameron Rd,  Austin, TX 78752"
// 			></iframe>