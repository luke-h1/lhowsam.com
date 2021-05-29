import Link from 'next/link';
import styled from '@emotion/styled';

const NavbarContainer = styled.div`
  min-width: 100vw;
  height: 65px;
  z-index: 20;
  background: #fff;
  -webkit-box-shadow: 0 2px 6px -6px #222;
  -moz-box-shadow: 0 2px 6px -6px #222;
  box-shadow: 0 2px 6px -6px #222;
  margin-bottom: 1.3rem;
`;

const NavbarWrap = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  z-index: 20;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  width: 128px;
  height: 22px;
  background-size: 100% 100%;
  cursor: pointer;
`;

const Nav = styled.nav`
  flex: 1;
  position: relative;
  padding-left: 50px;
`;

const Search = styled.div`
  right: 235px;
  position: absolute;
`;

const SearchWrap = styled.div`
  width: 220px;
  height: 22px;
  position: relative;
  box-sizing: border-box;
  line-height: 33px;
  padding-left: 37px;
  border-radius: 19px;
`;

// const ButtonContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `;

// const Button = styled.div`
//   width: 110px;
//   color: #fff;
//   cursor: pointer;
//   height: 36px;
//   font-size: 16px;
//   box-sizing: border-box;
//   background: #007cff;
//   text-align: center;
//   line-height: 36px;
//   border-radius: 21px;
// `;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrap>
        <Logo />
        <Nav>
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
          <Link href="/about">
            <a className="nav-link">About</a>
          </Link>
        </Nav>
        <Search>
          <SearchWrap />
        </Search>
        {/* <ButtonContainer>
          <Button
            style={{
              color: '#037cff',
              background: '#fff',
            }}
          >
            test button
          </Button>
          <Button>test button</Button>
        </ButtonContainer> */}
      </NavbarWrap>
    </NavbarContainer>
  );
};

export default Navbar;
