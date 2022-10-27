import React from 'react';
import {
  chakra,
  Grid,
  Image,
  Button,
  Container,
  Text,
  Flex,
} from '@chakra-ui/react';
import { Image as bannerImage } from '../data/dummyData';
function HeroBanner() {
  return (
    <chakra.div
      pt="100px"
      pb="20"
      backgroundImage="url('/images/kyuubi.png')"
      borderBottom={`0.5px solid #CBD5E0`}
    >
      <Flex px="350px" gap="30px">
        {/* <chakra.div sx={{ p: 2, border: '5px solid ' }}> */}
        <Image
          src={bannerImage.banner.header}
          alt="banner"
          sx={{ w: '100%', h: 'full' }}
          objectFit="contain"
          filter="auto"
          brightness="80%"
          borderRadius="md"
          boxShadow="2xl"
        />
        {/* </chakra.div> */}

        <Container
          sx={{
            px: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Text fontSize="4xl" as="b" color="gray.800">
            {/* 10 */}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. .{' '}
          </Text>
          <Text mt="3">
            {/* 40 */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            dolorem incidunt facere consectetur cupiditate ea itaque ut non sit
            debitis, recusandae velit modi et id commodi similique officiis! Ut
          </Text>
          <chakra.div sx={{ display: 'flex', gap: 5, mt: 7 }}>
            <Button
              w="50%"
              bg="blue.500"
              color="gray.200"
              textTransform="uppercase"
              sx={{ _hover: { bg: 'blue.400' } }}
            >
              Test 123
            </Button>
            <Button
              w="50%"
              bg="blue.100"
              color="blue.400"
              textTransform="uppercase"
              sx={{ _hover: { bg: 'blue.100' } }}
            >
              Test 123
            </Button>
          </chakra.div>
        </Container>
      </Flex>
    </chakra.div>
  );
}

export default HeroBanner;
