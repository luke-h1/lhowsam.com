/* eslint-disable react/prop-types */
/* eslint-disable */
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../styles/Themes';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
  IconContainer,
  Sun,
  Moon,
} from './NavbarElements';

function Navbar({ theme, toggleTheme }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              Luke H
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/projects" onClick={closeMobileMenu}>
                  Projects
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/blog" onClick={closeMobileMenu}>
                  Blog
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact" onClick={closeMobileMenu}>
                  Contact
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                <NavBtnLink>
                  <IconContainer>
                    {theme === 'light' ? (
                      <Sun onClick={toggleTheme} />
                    ) : (
                      <Moon onClick={toggleTheme} />
                    )}
                  </IconContainer>
                </NavBtnLink>
              </NavItemBtn>
              <NavItemBtn />
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </>
    </ThemeProvider>
  );
}

export default Navbar;
