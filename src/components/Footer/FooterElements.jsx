import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #fff;
  border-top: 1px solid #eee;
  position: fixed;
  bottom: 0px;
  width: 100%;
  margin: 0;
  height: 90px;
`;

export const FooterWrap = styled.div`
  padding: 14px 24px;
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
  margin: 16px auto 0 auto;
  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #000;
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
  color: #000;
  font-size: 24px;
  &:hover {
    color: #1f98f4;
    transform: scale(1.15);
    transition: scale ease 0.5s;
  }
`;
