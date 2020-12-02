/* eslint-disable */
import React from "react"
import { Link } from "gatsby"
import { GlobalStyle } from "../styles"
import { useDarkTheme } from '../hooks/useDarkMode';
import { lightTheme, darkTheme } from '../styles/Themes';
import { ThemeProvider } from "styled-components"
import Navbar from "../components/Navbar/Navbar"
const Layout = ({ location, title, children }) => {
  const [theme, setTheme] = useDarkTheme(
    (typeof window !== "undefined" && window.localStorage.getItem("theme")) ||
      "light"
  )

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <Navbar theme={theme} />
        {children}
        <Footer theme={theme} />
      </>
    </ThemeProvider>
  )
}

export default Layout
