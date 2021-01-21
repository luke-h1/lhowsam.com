/* eslint-disable */
import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/GlobalStyles"
import { theme } from "../styles/Theme"
import Nav from "./Nav/Nav"
import Footer from "./Footer/Footer"

const Layout: React.FC<{ children: Node }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Nav theme={theme} />
        {children}
        <Footer theme={theme} />
      </>
    </ThemeProvider>
  )
}

export default Layout
