import React from 'react';
import { Container } from '../../globalStyles';
import { featuresData } from '../../data/FeaturesData';

import {
  FeatureText,
  FeatureSection,
  FeatureTitle,
  FeatureWrapper,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureName,
  FeatureTextWrapper,
} from './FeaturesStyles';


const Features = () => {
  return (
    <FeatureSection>
      <Container>
        <FeatureTextWrapper>
          <FeatureTitle> What We Do </FeatureTitle>
        </FeatureTextWrapper>
      
        <FeatureWrapper>
          {featuresData.map((el, index) => (
            <FeatureColumn key={index}>
              <FeatureImageWrapper className={el.imgClass}>
                {el.icon}
              </FeatureImageWrapper>
              <FeatureName> {el.name} </FeatureName>
              <FeatureText> {el.description} </FeatureText>
            </FeatureColumn>
          ))}
        </FeatureWrapper>
      </Container>
    </FeatureSection>
  );
}

export default Features;
