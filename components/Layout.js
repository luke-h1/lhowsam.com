import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Reset } from '@styles/reset';
import { theme } from '@styles/Theme';

import MDXComponents from '@components/MDXComponents';
import Footer from '@components/Footer/Footer';
import Header from '../components/Header/Header';
// import Sidebar from '@components/SideBar/SideBar';
// import NavBar from '@components/NavBar/NavBar';

const Layout = ({ children }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      {Reset}
      <ChakraProvider>
        <MDXProvider components={MDXComponents}>
          <Header />
          {children}
          <Footer theme={theme} />
        </MDXProvider>
      </ChakraProvider>
    </>
  );
};
export default Layout;
