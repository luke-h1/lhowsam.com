import { css, Global } from '@emotion/react';
import { normalize } from 'polished';
import { fontWeights, spacing } from './typography';
import { heading } from './helpers';

const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 3rem 1rem;
        margin: 0;
        background: papayawhip;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
      }
      ${normalize()}

      :root {
        --bg: #1a202c;
        --text-color: #f2f5f8;
        --secondary: #242c38;
        --dark: #1a202c;
        --content-width: 90%;
      }

      html {
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.6;
        scroll-behavior: smooth;
      }
      html,
      body {
        box-sizing: border-box;
        height: 100%;
        margin: 0;
        padding: 0;
      }
      body {
        font-weight: 400;
        color: var(--text-color);
        background: var(--bg);
        overflow-x: hidden;
      }
      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }
      h1 {
        font-size: ${heading.xl};
        margin-bottom: ${spacing[10]};
      }
      h2 {
        font-size: ${heading.lg};
        margin-bottom: ${spacing[8]};
      }
      h3 {
        font-size: ${heading.md};
      }
      h4 {
        font-size: ${heading.sm};
      }
      h5 {
        font-size: ${heading.xs};
      }
      h1,
      h2,
      h3,
      h4,
      h5 {
        font-weight: ${fontWeights.bold};
        margin-bottom: ${spacing[6]};
      }
      strong {
        font-weight: ${fontWeights.bold};
      }
    `}
  />
);

export default globalStyles;
