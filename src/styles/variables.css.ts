import {
  slate,
  slateDark,
  blue,
  blackA,
  whiteA,
  greenP3,
  greenDarkP3,
  grayDark,
  gray,
} from '@radix-ui/colors';
import {
  createGlobalThemeContract,
  createGlobalTheme,
} from '@vanilla-extract/css';

const color = createGlobalThemeContract({
  page: 'color-page',
  pageFaint: 'color-page-faint',
  foreground: 'color-foreground',
  foregroundNeutral: 'color-foreground-neutral',
  foregroundHighContrast: 'color-foreground-high-contrast',
  surface: 'color-surface',
  surfaceFaint: 'color-surface-faint',
  surfaceStrong: 'color-surface-strong',
  border: 'color-border',
  borderNeutral: 'color-border-neutral',
  overlay: 'color-overlay',
  highlight: 'color-highlight',
  outline: 'color-outline',
  surfaceHover: 'color-surface-hover',
  surfaceNeutral: 'color-surface-neutral',
  borderFaint: 'color-border-faint',
  underline: 'color-underline',

  spotifyBgColor: 'color-spotify-bg-color',
  spotifyLink: 'color-spotify-link-color',
});

createGlobalTheme(':root.light', color, {
  page: slate.slate1,
  pageFaint: slate.slate3,
  foreground: slate.slate12,
  foregroundNeutral: slate.slate11,
  foregroundHighContrast: slate.slate1,
  surface: slate.slate2,
  surfaceFaint: slate.slate4,
  surfaceStrong: slate.slate12,
  border: slate.slate8,
  overlay: whiteA.whiteA11,
  borderNeutral: slate.slate4,
  highlight: greenP3.green10,
  outline: blue.blue8,
  surfaceHover: gray.gray4,
  surfaceNeutral: gray.gray6,
  borderFaint: gray.gray4,
  underline: gray.gray7,
  spotifyBgColor: '#D1D5DB',
  spotifyLink: '#1F2937',
});

createGlobalTheme(':root.dark', color, {
  page: slateDark.slate1,
  pageFaint: slateDark.slate3,
  foreground: slateDark.slate12,
  foregroundNeutral: slateDark.slate11,
  foregroundHighContrast: slateDark.slate1,
  surface: slateDark.slate2,
  surfaceFaint: slateDark.slate4,
  surfaceStrong: slateDark.slate12,
  border: slateDark.slate8,
  borderNeutral: slateDark.slate4,
  highlight: greenDarkP3.green10,
  overlay: blackA.blackA11,
  outline: blue.blue8,
  surfaceHover: grayDark.gray4,
  surfaceNeutral: grayDark.gray7,
  borderFaint: grayDark.gray4,
  underline: grayDark.gray8,
  spotifyBgColor: '#6B7280',
  spotifyLink: '#E5E7EB',
});

const globals = createGlobalTheme(':root', {
  font: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    mono: "'JetBrainsMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  },
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
    xxxl: '4rem', // 64px
    xxxxl: '6rem', // 96px
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
  borderWidth: {
    0: '0',
    1: '1px',
    2: '2px',
    4: '4px',
    8: '8px',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
  },
  contentWidth: {
    text: '60ch',
    container: '50rem',
  },
});

export const variables = { ...globals, color };
