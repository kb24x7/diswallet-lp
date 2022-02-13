import type { NextPage } from 'next';
import React from 'react';
import { DefaultHead } from '@/layouts/Head';
import { Navbar } from '@/layouts/Navbar';
import {
  FirstSection,
  SecondSection,
  ThirdSection,
  Footer,
} from '@/layouts/Sections';

const Home: NextPage = function HomePage() {
  return (
    <>
      <DefaultHead />
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </>
  );
};

export default Home;
