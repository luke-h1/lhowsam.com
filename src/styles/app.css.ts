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
  width: '100%',
  maxWidth: '100%',
  overflowX: 'hidden',
});

globalStyle('.bg', {
  position: 'fixed',
  width: '100%',
  height: '100%',
  left: '0px',
  top: '0px',
  opacity: 0.04,
  zIndex: -1,
});

globalStyle('.dark .bg', {
  opacity: 0.08,
});

globalStyle('.base', {
  backgroundColor: variables.color.appBg,
  height: '100%',
  position: 'fixed',
  width: '100%',
  left: '0px',
  top: '0px',
  zIndex: -2,
});

globalStyle('.dark .iconInvert', {
  filter: 'invert(1)',
  transition: 'color 0.2s ease',
});

globalStyle('.logoInvert', {
  width: '130px',
  margin: '1.775rem 0rem 1rem 0.975rem',
  transition: 'color 0.2s ease',
  opacity: 0.9,
});

globalStyle('.dark .logoInvert', {
  filter: 'invert(1)',
});

globalStyle('html,body,p,h1,h2,h3,h4,h5,button', {
  padding: 0,
  margin: 0,
  fontFamily: variables.font.sans,
  position: 'relative',
});

globalStyle('html', {
  scrollBehavior: 'smooth',
});

globalStyle('p', {
  letterSpacing: '0.1px',
  fontWeight: 390,
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('span a[href*="http"]:hover', {
  color: variables.color.linkContainerGrayBg,
});

globalStyle('span a[href*="http"]', {
  textDecoration: 'underline',
  transition: 'color 100ms ease',
});

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('.tag', {
  padding: '3px 4px',
  marginLeft: '3px',
  borderRadius: '3px',
  fontSize: variables.fontSize.sm,
  lineHeight: 1,
  color: 'rgba(0, 0, 0, 0.74)',
  transition: 'all 0.2s ease',
  '@media': {
    'screen and (max-width: 700px)': {
      marginLeft: '0px',
      marginRight: '3px',
    },
  },
});
