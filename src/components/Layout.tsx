import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Header from "./Header/Header";
import Footer from "./Footer";
interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ChakraProvider resetCSS theme={theme}>
        <Header />
        {children}
        <Footer />
      </ChakraProvider>
    </>
  );
};
