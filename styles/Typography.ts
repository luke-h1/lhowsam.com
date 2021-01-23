import { css } from "@emotion/css";
import { Theme } from "@emotion/react";
import { Fonts, FontWeights, Colors } from "./Global";
import { normalize } from "polished";
const Typography = (theme: Theme) => css`
  ${normalize()}

  @font-face {
    font-family: "Noto Sans JP";
    src: url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap");
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 16px;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: ${Fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p,
  ul,
  ol {
    margin-top: 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
export default Typography;
