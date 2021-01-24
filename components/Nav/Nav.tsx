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

const Nav: React.FC<{ theme: String }> = ({ theme }) => {
  const [click, setClick]: any = useState(false);
  const handleClick: any = () => setClick(!click);
  const closeMobileMenu: any = () => setClick(false);

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
  theme: PropTypes.string.isRequired,
};

export default Nav;
