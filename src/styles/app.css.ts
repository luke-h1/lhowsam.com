import { globalStyle } from '@vanilla-extract/css';
import { theme } from './theme.css';
import { typography } from './typography.css';

globalStyle('html', {
  lineHeight: 1.3,
  WebkitTextSizeAdjust: '100%',
});

globalStyle('body', {
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility',
  fontFamily: typography.font.poppins,
  backgroundColor: theme.color.page,
  width: '100%',
  maxWidth: '100%',
  overflowX: 'hidden',
});

globalStyle('.container', {
  position: 'relative',
  paddingInline: typography.spacing.lg,
  paddingBlock: typography.spacing.xxxxl,
});

globalStyle('ul:not([class])', {
  listStyleType: 'disc',
  display: 'grid',
  paddingInlineStart: typography.spacing.md,
  gap: typography.spacing.sm,
});

globalStyle('ul:not([class]) ul:not([class])', {
  marginTop: typography.spacing.sm,
  listStyleType: 'circle',
});
