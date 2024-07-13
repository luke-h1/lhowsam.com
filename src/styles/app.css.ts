import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import { variables } from './variables.css';

globalFontFace('Inter var', {
  fontStyle: 'normal',
  fontWeight: '100 900',
  fontDisplay: 'swap',
  src: 'url(/fonts/Inter.var.woff2) format("woff2")',
});

globalFontFace('JetBrains Mono NL', {
  fontStyle: 'normal',
  fontWeight: '400',
  fontDisplay: 'swap',
  src: 'url(/fonts/JetBrainsMono-Regular.woff2) format("woff2")',
});

globalFontFace('JetBrains Mono NL', {
  fontStyle: 'normal',
  fontWeight: '700',
  fontDisplay: 'swap',
  src: 'url(/fonts/JetBrainsMono-Bold.woff2) format("woff2")',
});

globalStyle('html', {
  lineHeight: 1.45,
  WebkitTextSizeAdjust: '100%',
});

globalStyle('body, #__next, .container', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

globalStyle('body', {
  overflowX: 'hidden',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility',
  fontFamily: variables.fontFamily.sans,
  backgroundColor: variables.color.page,
  color: variables.color.foreground,
});

globalStyle('svg', {
  maxWidth: '100%',
  height: 'auto',
});

globalStyle('.container', {
  position: 'relative',
  paddingInline: variables.spacing.lg,
  paddingBlock: variables.spacing.xxl,
});
