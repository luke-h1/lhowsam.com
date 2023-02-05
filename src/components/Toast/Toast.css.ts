import { theme } from '@frontend/styles/theme.css';
import { typography } from '@frontend/styles/typography.css';
import { style } from '@vanilla-extract/css';

export const viewport = style({
  position: 'fixed',
  right: typography.spacing.md,
  bottom: typography.spacing.md,
  display: 'grid',
  zIndex: 10,
});

export const root = style({
  position: 'relative',
  marginBlockStart: typography.spacing.sm,
  maxWidth: 350,
  width: 350,
  padding: typography.spacing.md,
  backgroundColor: theme.color.surface,
  border: `1px solid ${theme.color.border}`,
  borderRadius: typography.radius.md,
});

export const title = style({
  marginBlockEnd: typography.spacing.sm,
  fontWeight: 550,
});

export const description = style({
  fontSize: typography.fontSize.sm,
  color: theme.color.foregroundNeutral,
});

export const close = style({
  position: 'absolute',
  top: typography.spacing.sm,
  right: typography.spacing.sm,
  width: typography.spacing.xxl,
  height: typography.spacing.xxl,
  display: 'grid',
  placeItems: 'center',
  borderRadius: typography.radius.md,
  cursor: 'pointer',
  transitionTimingFunction: 'ease-in-out',
  transitionDuration: '200ms',
  transitionProperty: 'background-color',
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

export const closeHighlight = style({
  position: 'absolute',
  inset: 0,
  backgroundColor: theme.color.surfaceHover,
  borderRadius: typography.radius.md,
  opacity: 0,
  transform: 'scale(0)',
  transition: 'all ease-in-out 200ms',
  selectors: {
    [`${close}:hover &`]: {
      opacity: 1,
      transform: 'scale(1)',
    },
    [`${close}:focus-visible &`]: {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
});

export const closeIcon = style({
  position: 'relative',
  zIndex: 1,
});
