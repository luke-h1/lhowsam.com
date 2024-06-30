import { createGlobalTheme } from '@vanilla-extract/css';

export const tokens = createGlobalTheme(':root', {
  fontFamily: {
    sans: "'Inter var', sans-serif",
    mono: "'JetBrains Mono NL', monospace",
  },
  fontSize: {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xxl: '1.5rem',
    xxxl: '1.75rem',
  },
  fontWeight: {
    normal: '400',
    semiBold: '500',
    bold: '700',
  },
  spacing: {
    none: '0',
    auto: 'auto',
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
  radius: {
    sm: '2px',
    md: '4px',
    lg: '8px',
    full: '9999px',
  },
  letterSpacing: {
    tight: '-.02em',
    wide: '.02em',
  },
  maxWidth: {
    sm: '32rem',
    md: '48rem',
    lg: '64rem',
    text: '68ch',
  },
  aspectRatio: {
    '1/1': '1/1',
    '16/9': '16/9',
    '4/3': '4/3',
  },
});
