import React, { useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import PageLogo from '../components/Image/PageLogo';
import OpenSeaButton from '../components/Button/OpenSeaButton';
import InstagramButton from '../components/Button/InstagramButton';
import TwitterButton from '../components/Button/TwitterButton';
import Axios from 'axios';

const HeroBanner: React.FC = () => {
  useEffect(() => {
    console.log('hi');
    Axios.get(`/api/user`)
      .then((res) => {
        console.log(res)
      });
  }, [])
  return (
    <header className="App-header">
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          backgroundSize: '100%',
          backgroundImage: `url(${`${process.env.PUBLIC_URL}/images/Banner.jpg`})`,
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
          <PageLogo />
          <OpenSeaButton />
          <InstagramButton />
          <TwitterButton />
        </Stack>
      </Box>

    </header>
  );
};

export default HeroBanner;