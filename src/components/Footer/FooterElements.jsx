/* eslint-disable */

import styled from 'styled-components';
import { Link } from 'gatsby';

export const FooterContainer = styled.footer`
  position: relative;
  bottom: 0px;
  width: 100%;
  margin: 0;
  background: ${(props) => props.theme.secondaryBackgroundColor};
  min-height: 60px;
  @media(min-width: 680px){
    height: 80px;
  }

  @media (max-width: 500px) {
    display: none;
  } 
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
`;

export const SocialMedia = styled.section`
  max-width: 100vw;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 13px auto 0 auto;
  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: ${(props) => props.theme.primaryColor}; 
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: 700;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: ${(props) => props.theme.primaryColor}; 
  font-size: 24px;
  &:hover {
    color: ${(props) => props.theme.textOnDisabled}; 
    transform: scale(1.15);
    transition: scale ease 0.5s;
  }
`;