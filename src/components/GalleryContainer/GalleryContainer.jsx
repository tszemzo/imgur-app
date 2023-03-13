import { Box, Container } from '@mui/material';
import { useState, useEffect } from 'react';
import { getGalleryImages } from '../../services/images';
import Gallery from '../Gallery/Gallery';

function GalleryContainer() {
  const [images, setImages] = useState([]);

  useEffect(() => { 
    const getImages = async () => {
      const response = await getGalleryImages();
      setImages(response);
    }

    try {
      getImages();
    } catch (err) {
      console.log('error fetching data from server: ', err);
    }
  }, []);

  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Gallery 
          images={images}
        />
      </Container>
    </Box>
  );
}

export default GalleryContainer;
