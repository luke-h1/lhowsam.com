import { css, Global } from "@emotion/react";
import { normalize } from "polished";
import { prismLightTheme, prismDarkTheme } from "./prism";
import { useColorMode } from "@chakra-ui/react";

export const Reset = () => {
  const { colorMode } = useColorMode();
  return (
    <Global
      styles={css`
        ${normalize()}
        ${colorMode === "light" ? prismLightTheme : prismDarkTheme}
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        html {
          font-size: 16px;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        body {
          font-family: "Noto Sans JP";
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background: #fff;
          overflow-x: hidden;
        }
      `}
    />
  );
};
