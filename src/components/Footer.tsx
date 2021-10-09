import React from 'react';
import { FooterContent, FooterLinks, StyledFooter } from '@src/styles/footer';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterLinks>
          <a target="_blank" rel="noreferrer noopener" href="">
            Twitter
          </a>
          <a target="_blank" rel="noreferrer noopener" href="">
            GitHub
          </a>
          <a target="_blank" rel="noreferrer noopener" href="">
            LinkedIn
          </a>
        </FooterLinks>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;
