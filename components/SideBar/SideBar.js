/* eslint-disable max-len */
import React from 'react';
import { FiMenu } from 'react-icons/fi';
import {
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SideBarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SideBarStyles';
import data from '../NavBar/data.json';

// const CloseIcon = styled(FiMenu)`
//   color: #000 !important;
//   font-size: 25px;
// `;

const SideBar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <FiMenu style={{ fill: '#000 !important' }} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {data.map((i) => (
            <SideBarLink onClick={toggle} href={i.slug}>
              <a>{i.name}</a>
            </SideBarLink>
          ))}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute href="/testing">testing</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
export default SideBar;
