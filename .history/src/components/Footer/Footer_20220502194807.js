import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
        
        <FooterSubscription>

            <SocialLogo to="/">
                <SocialIcon src="./images/logo.svg" />
            </SocialLogo>

            <FooterSubHeading> Let's Collaborate </FooterSubHeading>

        </FooterSubscription>

        <SocialMedia>
            <SocialMediaWrap>

                <WebsiteRights> © Copyright 2022, Fachry. All Rights Reserved. </WebsiteRights>

                <SocialIcons>

                    <SocialIconLink href="/" target="_blank" aria-label='Facebook'>
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label='Instagram'>
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label='Twitter'>
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label='Youtube'>
                        <FaYoutube />
                    </SocialIconLink>

                </SocialIcons>

            </SocialMediaWrap>
        </SocialMedia>

    </FooterContainer>
  );
}

export default Footer;
