// @ts-ignore
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';
import data from './nav.json';
import {
  NavWrapper,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
} from './NavStyles';

const Nav = ({ theme }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavWrapper>
          <NavbarContainer>
            <NavLogo href="/" onClick={closeMobileMenu}>
              <a style={{ cursor: 'pointer' }}>
                <NavIcon />
              </a>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              {data.map((item) => (
                <NavItem key={item.id}>
                  <NavLinks href={item.slug} onClick={closeMobileMenu}>
                    <a>{item.name}</a>
                  </NavLinks>
                </NavItem>
              ))}
              <NavItemBtn> </NavItemBtn>
              <NavItemBtn />
            </NavMenu>
          </NavbarContainer>
        </NavWrapper>
      </ThemeProvider>
    </>
  );
};

export default Nav;
