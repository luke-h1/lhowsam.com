import { theme } from '@frontend/styles/theme.css';
import { typography } from '@frontend/styles/typography.css';
import { globalStyle } from '@vanilla-extract/css';

globalStyle('.prose > * + *', {
  marginTop: typography.spacing.lg,
});

globalStyle('.prose > * + h2', {
  marginTop: typography.spacing.xl,
});

globalStyle('.prose strong', {
  fontWeight: 600,
});

globalStyle('.prose hr', {
  marginTop: typography.spacing.xl,
  marginBottom: typography.spacing.xl,
  height: 1,
  backgroundColor: theme.color.border,
});

// code blocks

globalStyle(
  'html.dark div[data-theme="light"], html.dark pre[data-theme="light"], html.dark code[data-theme="light"]',
  {
    display: 'none',
  },
);

globalStyle(
  'html.light div[data-theme="dark"], html.light pre[data-theme="dark"], html.light code[data-theme="dark"]',
  {
    display: 'none',
  },
);

globalStyle('code', {
  fontFamily: typography.font.mono,
  fontSize: '0.9rem',
});

globalStyle('[data-rehype-pretty-code-title]', {
  padding: `${typography.spacing.md} ${typography.spacing.lg}`,
  backgroundColor: theme.color.surface,
  border: '1px solid',
  borderColor: theme.color.border,
  borderRadius: typography.radius.md,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  fontSize: typography.fontSize.sm,
});

globalStyle('pre[data-language]', {
  whiteSpace: 'pre',
  backgroundColor: theme.color.surface,
  border: '1px solid',
  borderColor: theme.color.border,
  borderRadius: typography.radius.md,
  paddingLeft: typography.spacing.lg,
});

globalStyle('[data-rehype-pretty-code-title] + pre[data-language]', {
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderTop: 0,
});

globalStyle('div[data-rehype-pretty-code-fragment] code', {
  display: 'grid',
});

globalStyle('div[data-rehype-pretty-code-fragment] pre', {
  overflowX: 'auto',
  paddingTop: typography.spacing.lg,
  paddingBottom: typography.spacing.lg,
});

globalStyle('div[data-rehype-pretty-code-fragment] .syntax-line', {
  borderLeft: '4px solid',
  borderLeftColor: 'transparent',
  paddingRight: typography.spacing.lg,
  paddingLeft: typography.spacing.lg,
});

/* Line highlighting */
globalStyle('div[data-rehype-pretty-code-fragment] .syntax-line--highlighted', {
  backgroundColor: theme.color.codeHighlight,
  borderColor: theme.color.highlight,
});

/* Numbered lines */
globalStyle('code[data-line-numbers]', {
  counterReset: 'line',
});

globalStyle('code[data-line-numbers] .syntax-line::before', {
  counterIncrement: 'line',
  content: 'counter(line)',
  display: 'inline-block',
  textAlign: 'right',
  marginRight: typography.spacing.lg,
  opacity: 0.5,
});
