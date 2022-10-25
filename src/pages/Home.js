import React from 'react';
import { chakra } from '@chakra-ui/react';
import {
  Navbar,
  HeroBanner,
  Products,
  Testimonials,
  Contact,
  Footer,
} from '../components';
function Home() {
  return (
    <chakra.div>
      <Navbar />
      <HeroBanner />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </chakra.div>
  );
}

export default Home;
