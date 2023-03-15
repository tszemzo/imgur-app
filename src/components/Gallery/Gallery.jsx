// import { useState } from 'react';
import _ from 'lodash';

import {
  Grid,
  Typography,
} from '@mui/material';

const Gallery = ({ images }) => {
  // const [showViral, setShowViral] = useState(true);

  return (
    <Grid container spacing={2} justifyContent="space-between" alignItems='center'>
      {
        _.map(images, ({ id, images, description }) => (
          <Grid item key={id} maxWidth="350px" sx={{ textAlign: 'center' }}>
            <img src={_.get(_.head(images), 'link')} alt="Not found" width="350" height="350" style={{ marginBottom: '18px' }}/>
            <Typography noWrap sx={{ color: 'black' }}>
              {description || 'No description'}
            </Typography>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default Gallery;
