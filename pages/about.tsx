import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";
export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <h1>About page</h1>
      </ThemeProvider>
    </>
  );
}
