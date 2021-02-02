import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavIcon } from '@icons/NavIcon';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  // NavBtnLink,
} from './NavStyles';
import data from './data.json';

const NavBar = ({ toggle, isScrolled }) => {
  return (
    <>
      <Nav isScrolled={isScrolled}>
        <NavbarContainer>
          <NavLogo href="/">
            <a>
              <NavIcon />
            </a>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {data.map((i) => (
              <NavItem key={i.id}>
                <NavLinks href={i.slug}>
                  <a>{i.name}</a>
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
          <NavBtn />
        </NavbarContainer>
      </Nav>
    </>
  );
};
export default NavBar;
