import { globalStyle, globalFontFace } from '@vanilla-extract/css';
import { variables } from './variables.css';

globalFontFace('Inter', {
  fontStyle: 'normal',
  fontWeight: '100 900',
  fontDisplay: 'optional',
  src: 'url(/fonts/inter-var-latin.woff2) format("woff2")',
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
});

globalFontFace('JetBrainsMono', {
  fontStyle: 'normal',
  fontWeight: '400',
  fontDisplay: 'optional',
  src: 'url(/fonts/JetBrainsMono-Variable.woff2) format("woff2")',
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
});

globalStyle('html', {
  lineHeight: 1.3,
  WebkitTextSizeAdjust: '100%',
});

globalStyle('body', {
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility',
  fontFamily: variables.font.sans,
  backgroundColor: variables.color.page,
  width: '100%',
  maxWidth: '100%',
  overflowX: 'hidden',
});

globalStyle('.container', {
  position: 'relative',
  paddingInline: variables.spacing.lg,
  paddingBlock: variables.spacing.xxxxl,
});

globalStyle('ul:not([class])', {
  listStyleType: 'disc',
  display: 'grid',
  paddingInlineStart: variables.spacing.md,
  gap: variables.spacing.sm,
});

globalStyle('ul:not([class]) ul:not([class])', {
  marginTop: variables.spacing.sm,
  listStyleType: 'circle',
});
