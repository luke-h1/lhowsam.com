import React from "react";
import { Heading } from "../components/Heading";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";
export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Heading>Hello</Heading>
      </ThemeProvider>
    </>
  );
}
