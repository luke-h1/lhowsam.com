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
  lineHeight: 1.4,
  WebkitTextSizeAdjust: '100%',
});

globalStyle('body', {
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility',
  fontFamily: variables.font.sans,
  backgroundColor: variables.color.page,
  overflowX: 'hidden',
});

// globalStyle('body::before', {
//   content: '',
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: variables.spacing.xxxl,
//   backgroundImage: scrim('bottom'),
//   zIndex: 100,
//   pointerEvents: 'none',
// });

globalStyle('body, #__next, .container', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

// globalStyle('body::after', {
//   content: '',
//   position: 'fixed',
//   bottom: 0,
//   left: 0,
//   width: '100%',
//   height: variables.spacing.xxxl,
//   backgroundImage: scrim('top'),
//   zIndex: 100,
//   pointerEvents: 'none',
// });

globalStyle('.container', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left',
  alignContent: 'center',
  alignItems: 'left',
  paddingBlock: variables.spacing.lg,
  // maxInlineSize: '170ch',
  // marginInline: 'auto',

  paddingInline: variables.spacing.lg,
  maxInlineSize: variables.contentWidth.header,
  marginInline: 'auto',
  maxWidth: variables.contentWidth.header,
});

globalStyle('.wrapper', {
  maxWidth: variables.contentWidth.content,
});

globalStyle('a:focus, button:focus', {
  outlineColor: 'transparent',
});

globalStyle('a:focus-visible, button:focus-visible', {
  outlineWidth: '2px',
  outlineStyle: 'solid',
  outlineOffset: '2px',
  outlineColor: variables.color.outline,
});

globalStyle('img', {
  height: 'auto',
});
