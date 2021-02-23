import { MDXProvider } from '@mdx-js/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Reset } from '@styles/reset';
import { theme } from '@styles/Theme';

import MDXComponents from '@components/MDXComponents';
import Footer from '@components/Footer/Footer';
import Header from './Header/Header';

const Layout = ({ children }) => {
  return (
    <>
      {Reset}
      <ChakraProvider>
        <MDXProvider components={MDXComponents}>
          <Header props={null} />
          {children}
          <Footer theme={theme} />
        </MDXProvider>
      </ChakraProvider>
    </>
  );
};
export default Layout;
