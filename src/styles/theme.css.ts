import {
  gray,
  grayDark,
  blackA,
  whiteA,
  blue,
  blueDark,
  yellow,
  yellowDark,
} from '@radix-ui/colors';
import {
  createGlobalThemeContract,
  createGlobalTheme,
} from '@vanilla-extract/css';

export const theme = createGlobalThemeContract({
  color: {
    page: 'color-page',
    foreground: 'color-foreground',
    foregroundNeutral: 'color-foreground-neutral',
    foregroundAction: 'color-foreground-action',
    surface: 'color-surface',
    surfaceHover: 'color-surface-hover',
    surfaceFaint: 'color-surface-faint',
    border: 'color-border',
    borderFaint: 'color-border-faint',
    overlay: 'color-overlay',
    outline: 'color-outline',
    underline: 'color-underline',
    underlineNeutral: 'color-underline-neutral',
    highlight: 'color-highlight',
    codeHighlight: 'color-code-highlight',
  },
});

// light mode
createGlobalTheme(':root.light', theme, {
  color: {
    page: gray.gray1,
    foreground: gray.gray12,
    foregroundNeutral: gray.gray11,
    foregroundAction: blue.blue11,
    surface: gray.gray2,
    surfaceHover: gray.gray4,
    surfaceFaint: gray.gray2,
    border: gray.gray6,
    borderFaint: gray.gray4,
    overlay: whiteA.whiteA11,
    outline: blue.blue11,
    underline: blue.blue11,
    underlineNeutral: gray.gray9,
    highlight: yellow.yellow4,
    codeHighlight: gray.gray3,
  },
});

// dark mode
createGlobalTheme(':root.dark', theme, {
  color: {
    page: grayDark.gray1,
    foreground: grayDark.gray12,
    foregroundNeutral: grayDark.gray11,
    foregroundAction: blueDark.blue11,
    surface: grayDark.gray3,
    surfaceHover: grayDark.gray4,
    surfaceFaint: grayDark.gray2,
    border: grayDark.gray6,
    borderFaint: grayDark.gray4,
    overlay: blackA.blackA11,
    outline: blueDark.blue11,
    underline: blueDark.blue11,
    underlineNeutral: grayDark.gray9,
    highlight: yellowDark.yellow7,
    codeHighlight: grayDark.gray4,
  },
});
