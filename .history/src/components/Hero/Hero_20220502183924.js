import React from 'react';
import { FiMail } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import Modal from './components/index';

import {
  HeroSection, HeroButton,
  HeroText, HeroImage,
  HeroContent, Heading,
  ButtonWrapper,
  ButtonContainer,
  CharacterContainer,
  ImageCharacter,
} from './HeroStyles';


const Hero = () => {
  return (
    <>
      <HeroSection id="hero">
        <HeroImage className='pattern' src="./images/hero-pattern-bg-lg.png" />
        <HeroImage className='guy' src="./images/hero-guy-1.png" />

        <CharacterContainer>
          <ImageCharacter
              dragConstraints={dragConstraints}
              className='one'
              src="./images/image 1.png"
          />
          
          <ImageCharacter
              dragConstraints={dragConstraints}
              className='two'
              src="./images/image 2.png"
          />
          
          <ImageCharacter
              variants={variants}
              whileHover="hover"
              drag
              dragConstraints={dragConstraints}
              className='three'
              src="./images/image 3.png"
          />

        </CharacterContainer>

        <HeroContent>

        </HeroContent>
      </HeroSection>
      
      <Modal showModal={showModal} toggleModal={toggleModal} />
    </>
  );
}

export default Hero;
