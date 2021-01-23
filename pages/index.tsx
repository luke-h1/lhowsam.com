import React from "react";
import Intro from "../components/Intro/Intro";
import { NextSeo } from "next-seo";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";
export default function Home() {
  return (
    <>
      <NextSeo
        title="Home | lhowsam.com"
        canonical="https://lhowsam.com/"
        openGraph={{
          url: "https://lhowsam.com",
          title: "Home | lhowsam.com",
        }}
      />
      <ThemeProvider theme={theme}>
        <Intro theme={theme} />
      </ThemeProvider>
    </>
  );
}
