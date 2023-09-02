import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: variables.radius.lg,
});

export const carousel = style({
  display: 'flex',
});

export const item = style({
  position: 'relative',
  display: 'grid',
  minWidth: '100%',
});

export const pagination = style({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  justifyContent: 'space-between',
  padding: variables.spacing.md,
  pointerEvents: 'none',
});

export const button = style({
  position: 'absolute',
  top: 0,
  height: '100%',
  display: 'grid',
  placeItems: 'center',
  flexShrink: 0,
  pointerEvents: 'auto',
});

export const prev = style({
  left: 0,
  paddingLeft: variables.spacing.md,
});

export const next = style({
  right: 0,
  paddingRight: variables.spacing.md,
});

export const disc = style({
  width: variables.spacing.xxxl,
  height: variables.spacing.xxxl,
  background: variables.color.surface,
  display: 'grid',
  placeItems: 'center',
  borderRadius: variables.radius.full,
  selectors: {
    [`${button}:focus &`]: {
      outline: 'transparent',
    },
    [`${button}:focus-visible &`]: {
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineOffset: '2px',
      outlineColor: variables.color.outline,
    },
  },
});
export const list = style({
  position: 'absolute',
  bottom: variables.spacing.md,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  gap: variables.spacing.sm,
});

export const dot = style({
  width: variables.spacing.sm,
  height: variables.spacing.sm,
  backgroundColor: variables.color.surface,
  borderRadius: variables.radius.full,
  pointerEvents: 'auto',
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

export const rounded = style({
  borderRadius: variables.radius.lg,
  overflow: 'hidden',
});
