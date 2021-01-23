import React from "react";
import { NextSeo } from "next-seo";
import ProjectPage from "../../layout/ProjectPage/ProjectPage";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/Theme";

export default function Index() {
  return (
    <>
      <NextSeo
        title="Projects | lhowsam.com"
        canonical="https://lhowsam.com/projects"
        openGraph={{
          url: "https://lhowsam.com/blog",
          title: "Projects | lhowsam.com",
        }}
      />
      <ThemeProvider theme={theme}>
        <ProjectPage theme={theme} />
      </ThemeProvider>
    </>
  );
}
