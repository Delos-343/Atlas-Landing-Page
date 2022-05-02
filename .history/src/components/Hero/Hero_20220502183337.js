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

      </HeroSection>
      
      <Modal showModal={showModal} toggleModal={toggleModal} />
    </>
  );
}

export default Hero;
