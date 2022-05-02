import React from 'react';
import { Clients, Content, Features, Hero } from '../components/index';
import { heroOne, heroTwo, heroThree, heroFour } from '../data/HeroData';
import { Heading } from '../globalStyles';

const HomePage = () => {
  return (
    <>
        <Hero />
        <Features />
        <Clients />
        <Heading id="projects"> Our Portfolio </Heading>
        <Content {...heroOne} />
        <Content {...heroTwo} />
        <Content {...heroThree} />
        <Content {...heroFour} />
    </>
  );
}

export default HomePage;
