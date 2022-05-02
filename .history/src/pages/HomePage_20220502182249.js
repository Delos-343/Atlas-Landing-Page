import React from 'react';
import { Clients, Content, Features, Hero } from '../components/index';
import { heroOne, heroTwo, heroThree, heroFour } from '../data/HeroData';
import { Heading } from '../globalStyles';

const HomePage = () => {
  return (
    <div>
        <Hero />
        <Features />
        <Clients />
        <Content {...heroOne} />
        <Content {...heroTwo} />
        <Content {...heroThree} />
        <Content {...heroFour} />
    </div>
  );
}

export default HomePage;
