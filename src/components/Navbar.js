import React from 'react';
import {
  Box,
  Button,
  chakra,
  Container,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      gap="40px"
      alignItems="center"
      sx={{
        py: 2,
        px: {
          base: '12px',
          sm: '16px',
          md: '20px',
          lg: '24px',
          xl: '28px',
          '2xl': '50px',
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
      <Box sx={{ display: 'flex', gap: 10 }}>
        <Text href="/about" sx={{ _hover: { bg: 'gray.100' }, px: 5 }}>
          About
        </Text>
        <Text href="/testimonials" sx={{ _hover: { bg: 'gray.100' }, px: 5 }}>
          Testimonials
        </Text>
        <Text href="/products" sx={{ _hover: { bg: 'gray.100' }, px: 5 }}>
          Products
        </Text>
        <Text href="/contact" sx={{ _hover: { bg: 'gray.100' }, px: 5 }}>
          Contact
        </Text>
      </Box>
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
