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
    <ClientSection id="clients">
			<Container>
				<ClientTextWrapper>
					<ClientTitle>Our Modules</ClientTitle>
					<ClientText>We have collaborated on multiple projects at a gloabl scale.</ClientText>
				</ClientTextWrapper>

				<ClientRow>
					{clientsData.map((clients, clientsIndex) => (
						<ClientColumn key={clientsIndex}>
							{clients.map((el, index) => (
								<ClientWrapper key={index}>
									<ClientImage src={`./images/companies/${el.name}.svg`} />
								</ClientWrapper>
							))}
						</ClientColumn>
					))}
				</ClientRow>
			</Container>
		</ClientSection>
  );
}

export default Clients;