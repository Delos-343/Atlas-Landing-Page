import React from 'react';
import { Container } from '../../globalStyles';
import { clientsData } from '../../data/ClientsData';

import {
    ClientSection,
    ClientColumn,
    ClientText,
    ClientTitle,
    ClientRow,
    ClientWrapper,
    ClientImage,
    ClientTextWrapper
} from './ClientsStyles';


const Clients = () => {
  return (
    <Container>
        <ClientTextWrapper>
          <ClientTitle> Our Clients </ClientTitle>
          <ClientText> We have worked on multiple projects at a global scale. Let's Collaborate!</ClientText>
        </ClientTextWrapper> 
    </Container>
  );
}

export default Clients;