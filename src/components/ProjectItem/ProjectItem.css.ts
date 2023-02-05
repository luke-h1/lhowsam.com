import { theme } from '@frontend/styles/theme.css';
import { typography } from '@frontend/styles/typography.css';
import { style, globalStyle } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  display: 'flex',
});

export const content = style({
  marginBottom: typography.spacing.md,
  textAlign: 'left',
});

globalStyle(`${content} > * + *`, {
  marginTop: typography.spacing.lg,
});

export const anchor = style({
  marginRight: typography.spacing.md,
  ':hover': {
    textDecoration: 'underline',
    textDecorationColor: 'currentcolor',
  },
  ':focus': {
    outline: 'transparent',
  },
  ':focus-visible': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    outlineColor: theme.color.outline,
  },
});
