import React from 'react';
import { Box, Button, chakra, Text, useColorMode } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      gap="40px"
      alignItems="center"
      sx={{
        py: 6,
        px: {
          base: '12px',
          sm: '16px',
          md: '20px',
          lg: '24px',
          xl: '28px',
          '2xl': '32px',
        },
      }}
    >
      <chakra.div display="flex" alignItems="center" gap="2">
        <Text
          fontSize="30px"
          as="b"
          letterSpacing="1px"
          cursor="pointer"
          onClick={() => {
            navigate('/as');
          }}
        >
          DiNaMo
        </Text>
      </chakra.div>
      <chakra.div></chakra.div>
      <chakra.div>
        <Button
          sx={{
            bg: 'gray.700',
            _hover: {
              bg: 'gray.600',
            },
            color: 'white',
          }}
        >
          Github
        </Button>
      </chakra.div>
    </Box>
  );
}

export default Navbar;
