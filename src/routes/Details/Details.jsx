import { useLocation } from "react-router-dom";
import _ from 'lodash';

import { Box, Container, Typography } from '@mui/material';

function Details() {
  const location = useLocation();
  const image = location.state.image;

  return (
    <Box
      component="section"
      sx={{ display: 'flex' }}
    >
      <Container sx={{ mt: 5, width: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border: '1px solid black' }}>
        <div style={{ marginBottom: 20 }}>
          <Typography variant='h5'>
            Image {image.id}
          </Typography>
        </div>
        <img src={_.get(_.head(image.images), 'link')} alt="Not found" width='750px' height='600px' />
        <div style={{ marginTop: 20, marginBottom: 10, width: '750px' }}>
          <Typography noWrap>
            Title: {image.title || 'No title'}
          </Typography>
          <Typography noWrap>
            Description: {image.description || 'No description'}
          </Typography>
          <Typography noWrap>
            Upvotes: {image.ups || '-' }
          </Typography>
          <Typography noWrap>
            Downvotes: {image.downs || '-' }
          </Typography>
          <Typography noWrap>
            Score: {image.score || '-' }
          </Typography>
        </div>
      </Container>
    </Box>
  )
}

export default Details;
