import React from 'react';
import Hero from '../components/Home/Hero';
import Highlights from '../components/Home/Highlights';
import WhatWeDo from '../components/Home/WhatWeDo';
import WhyItMatters from '../components/Home/WhyItMatters';
import AboutUs from '../components/Home/AboutUs';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <Highlights />
      <WhatWeDo />
      <WhyItMatters />
      <AboutUs />
    </div>
  );
};

export default Home;
