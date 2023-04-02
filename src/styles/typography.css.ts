import { createGlobalTheme } from '@vanilla-extract/css';

export const typography = createGlobalTheme(':root', {
  font: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xxl: '1.5rem',
    xxxl: '2rem',
  },
  fontWeight: {
    normal: '400',
    semiBold: '500',
    bold: '575',
  },
  spacing: {
    none: '0',
    xs: '0.25rem',
    sm: '.5rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xxl: '1.5rem',
    xxxl: '2rem',
    xxxxl: '4rem',
    auto: 'auto',
  },
  radii: {
    sm: '2px',
    md: '6px',
    lg: '10px',
    full: '9999px',
  },
  contentWidth: {
    text: '60ch',
    container: '50rem',
  },
  transition: {
    duration: '200ms',
  },
});
