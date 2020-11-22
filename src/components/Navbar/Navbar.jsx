import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
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
} from './NavbarElements';
import { NavContactButton } from '../utils/Buttons/NavContactButton';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
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
                <NavBtnLink to="/contact">
                  <NavContactButton round="true" primary="true">
                    Get In Touch
                  </NavContactButton>
                </NavBtnLink>
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
