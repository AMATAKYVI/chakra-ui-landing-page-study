import React from 'react';
import {
  chakra,
  Text,
  Image,
  ListItem,
  ListIcon,
  List,
} from '@chakra-ui/react';
import { IoMdSettings } from 'react-icons/io';
import { MdCheckCircle, MdCancel } from 'react-icons/md';

function Products() {
  return (
    <chakra.div
      pt="100px"
      pb="20"
      backgroundImage="url('/images/kyuubi.png')"
      borderBottom={`0.5px solid #CBD5E0`}
    >
      <chakra.div
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 3,
          px: '350px',
        }}
      >
        <Text as="b" sx={{ fontSize: '2xl' }}>
          Primary Ipsum
        </Text>
        <Text color="gray.500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
        </Text>
        <Text color="gray.500">
          {' '}
          praesentium. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </Text>
        <Text color="gray.500"> praesentium. Lorem ipsum dolo</Text>
        <Text color="gray.500" mt="4">
          {' '}
          praesentium. Lorem ipsum dolo Lorem ipsum dolor sit ame
        </Text>
        <Text color="gray.500">
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
          animi?
        </Text>
        <Text color="gray.500">
          {' '}
          praesentium. Lorem ipsum dolo Lorem ipsum dolor sit ame
        </Text>
      </chakra.div>
      <chakra.div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 20,
          mt: 10,
        }}
      >
        {[1, 2, 3].map((item, i) => {
          return (
            <chakra.div
              key={item}
              sx={{
                w: '17%',
                border: '1px solid #CBD5E0',
                borderRadius: 'lg',
                display: 'flex',
                justifyContent: 'center',
                py: 10,
                px: 5,
                boxShadow: '2xl',
              }}
              backgroundColor={item === 3 ? 'blue.500' : 'gray.200'}
              color={item === 3 && 'white'}
            >
              <chakra.div
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Text
                  sx={{
                    fontSize: 'xl',
                  }}
                >
                  {item} Hour
                </Text>{' '}
                <Text
                  sx={{
                    fontSize: 'sm',
                    fontWeight: '1',
                  }}
                  color={item === 3 ? 'gray.200' : 'gray.500'}
                >
                  Consultant
                </Text>{' '}
                <Text
                  sx={{
                    fontSize: '3xl',
                  }}
                  color={item === 3 ? 'blue.200' : 'gray.500'}
                  as="b"
                >
                  ${25 * item}
                </Text>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon
                      as={item === 3 ? MdCheckCircle : MdCancel}
                      color={item === 3 ? 'green.500' : 'red.500'}
                    />
                    Lorem ipsum dolor sit amet, consectetur
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={item === 2 || item === 3 ? MdCheckCircle : MdCancel}
                      color={item === 2 || item === 3 ? 'green.500' : 'red.500'}
                    />
                    Assumenda, quia temporibus eveniet a libero i
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Quidem, ipsam illum quis sed voluptatum quae eu
                  </ListItem>
                  {/* You can also use custom icons from react-icons */}
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Quidem, ipsam illum quis sed voluptatum quae eum
                  </ListItem>
                </List>
              </chakra.div>
            </chakra.div>
          );
        })}
      </chakra.div>
    </chakra.div>
  );
}

export default Products;
