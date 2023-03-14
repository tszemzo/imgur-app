import { Box, Container } from '@mui/material';
import { useState, useEffect } from 'react';
import { getGalleryImages } from '../../services/images';
import Gallery from '../Gallery/Gallery';
import GalleryFilters from '../GalleryFilters/GalleryFilters';

function GalleryContainer() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const response = getGalleryImages();
    console.log('response: ', response.data);
    setImages(response.data);

      // .then(images => {
      //   console.log('images: ', images);
      //   setImages(images);
      // })
      // .catch(err => {
      //   console.log('error fetching data from server: ', err);
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
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30 }}>
        <GalleryFilters onSearchClick={onSearchClick} />
        { loading ? <p>Loading...</p> : <Gallery images={images} /> }
      </Container>
    </Box>
  );
}

export default GalleryContainer;
