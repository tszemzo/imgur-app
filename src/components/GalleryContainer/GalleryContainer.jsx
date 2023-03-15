import { Box, Container, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import { getGalleryImages } from '../../services/images';
import Gallery from '../Gallery/Gallery';
import GalleryFilters from '../GalleryFilters/GalleryFilters';

function GalleryContainer() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setLoading(true);    
    const response = getGalleryImages();
    setImages(response.data);
    setLoading(false);    

      // .then(images => {
      //   console.log('images: ', images);
      //   setImages(images);
      // })
      // .catch(err => {
      //   console.log('error fetching data from server: ', err);
      // })
      // .finally(() => {
      //   setLoading(false);
      // });
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
      <Container sx={{ mt: 15, mb: 30 }}>
        <GalleryFilters onSearchClick={onSearchClick} loading={loading} />
        { 
          loading 
            ? (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <CircularProgress />
                </Box> 
            )
            : <Gallery images={images} /> }
      </Container>
    </Box>
  );
}

export default GalleryContainer;
