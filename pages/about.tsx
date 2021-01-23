import React from "react";
import { NextSeo } from 'next-seo';
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";
export default function Home() {
  return (
    <>
      <NextSeo
        title="About | lhowsam.com"
        canonical="https://lhowsam.com/about"
        openGraph={{
          url: "https://lhowsam.com/about",
          title: "About | lhowsam.com",
        }}
      />
      <ThemeProvider theme={theme}>
        <h1>About page</h1>
      </ThemeProvider>
    </>
  );
}
