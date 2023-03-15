import _ from 'lodash';

import { useNavigate } from 'react-router-dom';

import {
  Grid,
  Typography,
} from '@mui/material';

const GalleryContainer = ({ images }) => {
  const navigate = useNavigate();

  const handleImageClick = (image) => {
    navigate(`/gallery/${image.id}`, { state: { image } });
  }

  return (
    <Grid container spacing={2} justifyContent="space-between" alignItems='center'>
      {
        _.map(images, (image) => (
          <Grid item key={image.id} maxWidth="350px" sx={{ textAlign: 'center' }}>
            <img src={_.get(_.head(image.images), 'link')} alt="Not found" width="350" height="350" onClick={() => handleImageClick(image)} />
            <Typography noWrap>
              {image.description || 'No description'}
            </Typography>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default GalleryContainer;
