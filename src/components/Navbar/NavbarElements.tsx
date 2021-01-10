/* eslint-disable */
import styled from 'styled-components';
import { BiCodeBlock } from 'react-icons/bi';
import { Link } from 'gatsby';
import { Container } from '../../helpers/Container/Container';

export const Nav = styled.nav`
  background: ${(props) => props.theme.primaryBackgroundColor}; 
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.1rem calc((100vw - 1300px) / 2);
  z-index: 999;
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.textOnDisabled}; 
    min-width: 100vw;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 60px;
  ${Container}
  color: ${(props) => props.theme.primaryColor}; 
`;

export const NavLogo = styled(Link)`
  color: ${(props) => props.theme.primaryColor}; 
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(BiCodeBlock)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.6rem;
    cursor: pointer;
    color: ${(props) => props.theme.primaryColor}; 
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  height: 70px;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    min-width: 100vw;
    min-height: 100vh;
    position: absolute;
    top: 60px;
    overflow: hidden;
    left: ${({ click }: any) => (click ? 0 : '-200%')};
    opacity: 1;
    transition: all 0.2s ease;
    background: ${(props) => props.theme.lightTextColor}; 
    font-size: 1.8rem;
    font-weight: 700;
    overflow-y: hidden; /* Hide vertical scrollbar */
    overflow-x: hidden; /* Hide horizontal scrollbar */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export const NavItem = styled.li`
  height: 60px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.textOnDisabled};

  }
  @media screen and (max-width: 960px) {
    width: 100%;
    text-align: center;
    &:hover {
      border: none;
    }
    &:hover {
      transition: scale 0.2s ease;
      transform: scale(1.11);
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
  }
`;

export const NavLinks = styled(Link)`
  color: ${(props) => props.theme.primaryColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  height: 100%;
  font-size: 1.2rem;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    &:hover {
      color: ${(props) => props.theme.textOnDisabled}; 
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;




export const IconContainer = styled.div`
  margin-left: 10px;
`