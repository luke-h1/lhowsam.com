import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const viewport = style({
  position: 'fixed',
  right: variables.spacing.md,
  bottom: variables.spacing.md,
  display: 'grid',
  zIndex: 10,
});

export const root = style({
  position: 'relative',
  marginBlockStart: variables.spacing.sm,
  maxWidth: 350,
  width: 350,
  padding: variables.spacing.lg,
  backgroundColor: variables.color.surface,
  border: `1px solid ${variables.color.border}`,
  borderRadius: variables.radius.md,
});

export const title = style({
  marginBlockEnd: variables.spacing.sm,
  fontWeight: 550,
});

export const description = style({
  fontSize: variables.fontSize.sm,
  color: variables.color.foregroundNeutral,
});

export const close = style({
  position: 'absolute',
  top: variables.spacing.sm,
  right: variables.spacing.sm,
  width: variables.spacing.xxl,
  height: variables.spacing.xxl,
  display: 'grid',
  placeItems: 'center',
  borderRadius: variables.radius.md,
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
    outlineColor: variables.color.outline,
  },
});

export const closeHighlight = style({
  position: 'absolute',
  inset: 0,
  backgroundColor: variables.color.surfaceHover,
  borderRadius: variables.radius.md,
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
