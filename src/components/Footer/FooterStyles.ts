import styled from 'styled-components';
import { Link } from 'gatsby';

export const FooterContainer = styled.footer`
  margin-bottom: 0.5rem;
  @media (min-width: 680px) {
    height: 60px;
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

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 340px;
`;

export const SocialIconLink = styled.a`
  color: ${(props) => props.theme.darkTextColor};
  margin: 0 25px 0 25px;
  font-size: 25px;
  &:hover {
    color: ${(props) => props.theme.blueTextColor};
    transform: scale(1.15);
    transition: scale ease 0.5s;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  a {
    margin: 0 8px 0 8px;
    &:hover {
      color: ${(props) => props.theme.blueTextColor};
      transform: scale(1.15);
      transition: scale ease 0.5s;
    }
  }
`;

export const LinkItem = styled(Link)`
  color: ${(props) => props.theme.darkTextColor} !important;
`;
