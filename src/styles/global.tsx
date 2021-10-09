import { css, Global } from '@emotion/react';
import { normalize } from 'polished';
import { fontWeights, spacing } from './typography';
import { heading } from './helpers';

const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        font-weight: 400;
        color: var(--text-color);
        background: var(--bg);
        overflow-x: hidden;
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
        padding: 0;
        margin: 0;
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

      #__next {
        width: 100%;
        overflow: hidden;
      }

      .disable-scroll {
        overflow: hidden;
      }

      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }

      ::-webkit-scrollbar-track {
        background: var(--secondary);
      }

      ::-webkit-scrollbar-thumb {
        background: var(--text-color);
        border-radius: 0.5rem;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      * {
        font-family: 'Catamaran', sans-serif;
        box-sizing: border-box;
      }

      .container {
        min-height: calc(100vh - 21rem);
        width: 100%;
        display: flex;
        justify-content: center;
        padding-bottom: 2rem;
      }

      .content {
        width: var(--content-width);
      }

      .section__title {
        padding-top: 5rem;
        font-size: clamp(2rem, 7vw, 3rem);
        margin-bottom: 1rem;
      }

      .btn {
        padding: 0.3rem 1.5rem;
        border-radius: 0.2rem;
        color: white;
        transition: 300ms filter;
        border: none;
        font-size: 1rem;
        cursor: pointer;

        &:hover:enabled {
          filter: brightness(150%);
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }
      }

      .btn__light {
        background: var(--secondary);
      }

      .btn__dark {
        background: var(--dark);
      }

      .btn__lighter {
        color: var(--bg) !important;
        background: var(--text-color);

        &:hover {
          filter: brightness(120%);
        }
      }

      .btn__icon {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          margin-right: 10px;
          width: 1.2rem;
          fill: var(--secondary);
        }
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }

      @media (min-width: 768px) {
        :root {
          --content-width: 70%;
        }
      }

      @media (min-width: 1200px) {
        :root {
          --content-width: 70%;
        }
      }

      @media (min-width: 1800px) {
        :root {
          --content-width: 1400px;
        }
      }

      .tooltip-overwrite {
        color: var(--text-color) !important;
        background-color: var(--secondary) !important;
        font-size: 1rem !important;
        border-radius: 0.5rem !important;
      }

      .rehype-code-title {
        background: var(--secondary);
        border-bottom: 1.5px solid #2e3746;
        padding: 0.2rem 0.8rem;
        padding-top: 0.5rem;

        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;

        + pre {
          border-top-left-radius: 0 !important;
          border-top-right-radius: 0 !important;
        }
      }
      .rightContainer a {
        font-size: 1rem;
        font-weight: 500;
        padding: 0.5rem 1rem;
        border-radius: 0.3rem;
        background: transparent;
        transition: background 200ms;
      }

      @media (hover: hover) {
        .rightContainer a:hover {
          background: var(--dark);
        }
      }

      .alert {
        display: flex;
        align-items: center;

        padding: 0.5rem 0.8rem;
        border-radius: 0.5rem;
        font-size: 1rem;

        p,
        span {
          margin: 0;
          margin-left: 0.5rem;
        }

        &.info {
          background: var(--secondary);
        }

        &.error {
          background: rgb(145, 6, 6);
        }

        &.warn {
          background: #42381f;
        }
      }
    `}
  />
);

export default globalStyles;
