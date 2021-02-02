import React from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from '@icons/Logo';

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
            <Logo />
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
          <NavBtn>
            {/* <NavBtnLink href="/testing">
              <a>testing</a>
            </NavBtnLink> */}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
export default NavBar;
