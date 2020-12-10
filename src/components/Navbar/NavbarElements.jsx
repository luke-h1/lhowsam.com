/* eslint-disable */
import styled from 'styled-components';
import { BiCodeBlock } from 'react-icons/bi';
import { Link } from 'gatsby';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Container } from '../../utils/Containers/Container';

export const Nav = styled.nav`
  background: ${(props) => props.theme.primaryNavColor}; 
  height: 60px;
  display: flex;
  justify-content: space-between;
  /* padding: 0.1rem calc((100vw - 1300px) / 2); */
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
    font-size: 1.8rem;
    cursor: pointer;
    color: ${(props) => props.theme.primaryColor}; 
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    min-width: 100vw;
    min-height: 100vh;
    position: absolute;
    top: 80px;
    overflow: hidden;
    left: ${({ click }) => (click ? 0 : '-200%')};
    opacity: 1;
    transition: all 0.2s ease;
    background: ${(props) => props.theme.primaryNavColor}; 
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
    border-bottom: 1px solid ${(props) => props.theme.primaryHoverColor};
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
    height: 120px;
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
      color: ${(props) => props.theme.primaryHoverColor}; 
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

export const Sun = styled(FiSun)`
  color: ${(props) => props.theme.primaryColor}; 
  font-size: 25px;
  &:hover { 
    cursor: pointer;
    transform: scale(1.05);
    transition: scale(1s);
    color: ${(props) => props.theme.primaryHoverColorYellow};
  }

`;

export const Moon = styled(FiMoon)`
  color: ${(props) => props.theme.primaryColor}; 
  font-size: 25px;
  &:hover { 
    cursor: pointer;
    transform: scale(1.05);
    transition: scale(1s);
    color: ${(props) => props.theme.primaryHoverColor};


  }


`;


export const IconContainer = styled.div`
  margin-left: 10px;
`