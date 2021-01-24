// @ts-ignore
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
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

interface Navigation {
  click: Boolean[];
  handleClick: Boolean[];
  closeMobileMenu: Boolean[];
  theme: void;
}

const Nav: Navigation = ({ theme }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavWrapper>
          <NavbarContainer>
            <NavLogo href="/" onClick={closeMobileMenu}>
              <a>
                <NavIcon />
              </a>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks href="/" onClick={closeMobileMenu}>
                  <a>Home</a>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="/about" onClick={closeMobileMenu}>
                  <a>About</a>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="/projects" onClick={closeMobileMenu}>
                  <a>Projects</a>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="/blog" onClick={closeMobileMenu}>
                  <a>Blog</a>
                </NavLinks>
              </NavItem>
              <NavItemBtn>{/* <NavBtnLink href='test'/> */}</NavItemBtn>
              <NavItemBtn />
            </NavMenu>
          </NavbarContainer>
        </NavWrapper>
      </ThemeProvider>
    </>
  );
};

Nav.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default Nav;
