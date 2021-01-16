/* eslint-disable */

import styled from 'styled-components';
import { Link } from 'gatsby';

export const FooterContainer = styled.footer`
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
  background: ${(props) => props.theme.backgroundColor};
`;

export const SocialMedia = styled.section`
  max-width: 100vw;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 13px auto 0 auto;
  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: ${(props) => props.theme.primaryColor}; 
  /* justify-self: start; */
  cursor: pointer;
  text-decoration: none;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  font-weight: 700;
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 340px;
`;

export const SocialIconLink = styled.a`
  color: ${(props) => props.theme.textColor}; 
  margin: 0 25px 0 25px;
  font-size: 25px;
  &:hover {
    color: ${(props) => props.theme.blueTextColor}; 
    transform: scale(1.15);
    transition: scale ease 0.5s;
  }
`;
