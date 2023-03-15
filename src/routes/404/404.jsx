import {
  Box, 
  Typography, 
} from '@mui/material';

const ErrorPage = () => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h2">Page not found</Typography>
      <Typography variant="h5">Sorry, the page you requested wasn&#39;t found.</Typography>
    </Box>
  );
}

export default ErrorPage;
