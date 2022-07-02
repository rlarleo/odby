import React from 'react';
import { Box, Stack } from '@mui/material';
import OpenSeaButton from '../components/OpenSeaButton';
import InstagramButton from '../components/InstagramButton';

const HeroBanner: React.FC = () => {
  return (
    <header className="App-header">
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          backgroundSize: '100%',
          backgroundImage: `url(${`${process.env.PUBLIC_URL}/bannerImage.png`})`,
          backgroundRepeat: 'no-repeat',
          verticalAlign: 'middle'
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{
            width: '100%',
            height: '100vh'
          }}
        >
          <div>dsakfsda</div>
          <div>dsakfsda</div>
          <div>dsakfsda</div>
          <OpenSeaButton />
          <InstagramButton />
        </Stack>
      </Box>

    </header>
  );
};

export default HeroBanner;