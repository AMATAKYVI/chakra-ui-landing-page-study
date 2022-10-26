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
    <chakra.div pt="100px" pb="20" backgroundImage="url('/images/kyuubi.png')">
      <Flex px="350px" gap="30px">
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
          <Button w="50%" mt="2">
            sad
          </Button>
        </Container>
      </Flex>
    </chakra.div>
  );
}

export default HeroBanner;
