import {
  slate,
  slateDark,
  blue,
  blackA,
  whiteA,
  grayDark,
  gray,
} from '@radix-ui/colors';
import {
  createGlobalThemeContract,
  createGlobalTheme,
} from '@vanilla-extract/css';

export const variables = createGlobalThemeContract({
  color: {
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
  },
});

createGlobalTheme(':root.light', variables, {
  color: {
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
    highlight: '#FF4F00',
    outline: blue.blue8,
    surfaceHover: gray.gray4,
  },
});

createGlobalTheme(':root.dark', variables, {
  color: {
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
    highlight: '#FF4F00',
    overlay: blackA.blackA11,
    outline: blue.blue8,
    surfaceHover: grayDark.gray4,
  },
});
