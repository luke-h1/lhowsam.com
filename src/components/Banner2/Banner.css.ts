import { theme } from '@frontend/styles/theme.css';
import { typography } from '@frontend/styles/typography.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  width: '100%',
  paddingLeft: typography.spacing.md,
  paddingRight: typography.spacing.md,
  borderColor: theme.color.foreground,
});

export const nav = style({
  display: 'flex',
  justifyContent: 'left',
  gap: typography.spacing.md,
  maxWidth: typography.spacing.md,
  marginRight: 'auto',
  marginLeft: 'auto',
});

export const group = style({
  display: 'flex',
  gap: typography.spacing.md,
});

export const anchor = style({
  position: 'relative',
  display: 'grid',
  placeItems: 'center',
  paddingTop: typography.spacing.md,
  paddingBottom: typography.spacing.md,
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

export const highlight = style({
  position: 'absolute',
  top: -4,
  left: 0,
  width: '100%',
  height: 4,
  backgroundColor: theme.color.highlight,
});
