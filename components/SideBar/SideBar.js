/* eslint-disable max-len */
import { FiMenu } from "react-icons/fi";
import {
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SideBarLink,
} from "./SideBarStyles";
import data from "../NavBar/data.json";


const SideBar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <FiMenu style={{ fill: "#000" }} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {data.map((i) => (
            <SideBarLink onClick={toggle} href={i.slug} key={i.id}>
              <a>{i.name}</a>
            </SideBarLink>
          ))}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
export default SideBar;
