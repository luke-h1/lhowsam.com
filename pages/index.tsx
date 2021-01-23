import React from "react";
import Intro from "../components/Intro/Intro";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";
export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Intro theme={theme} />
      </ThemeProvider>
    </>
  );
}
