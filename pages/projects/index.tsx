import React from "react";
import ProjectPage from "../../layout/ProjectPage/ProjectPage";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/Theme";

export default function Index() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ProjectPage theme={theme} />
      </ThemeProvider>
    </>
  );
}
