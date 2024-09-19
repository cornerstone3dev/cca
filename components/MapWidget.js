import React, { useState, useRef } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Image from 'next/image';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];

const MapSection = ({ address }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: YOUR_API_KEY,
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