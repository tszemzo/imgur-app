import {
  Box,
  Typography,
  Link,
} from '@mui/material';

const Home = () => {
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
      <Typography variant="h2">Welcome to the Imgur App</Typography>
      <Typography variant="h5">Click { <Link href="/gallery">here</Link> } to visit our gallery</Typography>
    </Box>
  );
}

export default Home;
