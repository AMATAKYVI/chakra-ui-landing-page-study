import React from 'react';
import { Box, Button, chakra, Text, useColorMode } from '@chakra-ui/react';
import { Image as logoImage } from '../data/dummyData';
import { Image } from '@chakra-ui/react';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        py: 2,
        px: {
          base: '12px',
          sm: '16px',
          md: '20px',
          lg: '24px',
          xl: '28px',
          '2xl': '32px',
        },
        bg: colorMode === 'dark' ? 'gray.200' : 'gray.50',
      }}
    >
      <chakra.div>
        {/* use image base on theme changing */}
        <Image
          src={
            colorMode === 'dark' ? logoImage.logo.white : logoImage.logo.black
          }
          alt="Dan Abramov"
          sx={{
            boxSize: '50px',
            borderRadius: '2xl',
          }}
        />
      </chakra.div>
      <chakra.div>
        <chakra.div
          sx={{
            display: { base: 'none', sm: 'none', md: 'block' },
            color: 'black',
          }}
        >
          Welcome to CTX
        </chakra.div>
      </chakra.div>
      <chakra.div
        sx={{
          color: colorMode === 'dark' ? 'black' : 'white',
        }}
      >
        <Button
          onClick={toggleColorMode}
          sx={{
            bg: colorMode === 'dark' ? 'white' : 'gray.700',
            _hover: { bg: colorMode === 'dark' ? 'white' : 'gray.700' },
          }}
        >
          Dark or Light
        </Button>
      </chakra.div>
    </Box>
  );
}

export default Navbar;
