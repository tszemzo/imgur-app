import { Box, Container } from '@mui/material';
import { useState, useEffect } from 'react';

import { getGalleryImages } from '../../services/images';
import GalleryContainer from '../../components/GalleryContainer/GalleryContainer';
import GalleryFilters from '../../components/GalleryFilters/GalleryFilters';
import Loader from '../../components/Loader/Loader';

function Gallery() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setLoading(true);    
    getGalleryImages()
      .then(images => {
        console.log('images: ', images);
        setImages(images);
      })
      .catch(err => {
        console.log('error fetching data from server: ', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onSearchClick = ({
    section,
    sort,
    window,
    showViral,
  }) => {
    try {
      setLoading(true);
      const response = getGalleryImages(section, sort, window, showViral);
      setImages(response.data); 
    } catch (err) {
      console.log('Error fetching data from server: ', err); // Improve error handling
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden' }}
    >
      <Container sx={{ mt: 5, mb: 30 }}>
        <GalleryFilters onSearchClick={onSearchClick} loading={loading} />
        { 
          loading 
            ? <Loader />
            : <GalleryContainer images={images} /> }
      </Container>
    </Box>
  );
}

export default Gallery;
