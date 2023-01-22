import { theme } from '@frontend/styles/theme.css';
import { typography } from '@frontend/styles/typography.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: typography.radius.lg,
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
  padding: typography.spacing.md,
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
  paddingLeft: typography.spacing.md,
});

export const next = style({
  right: 0,
  paddingRight: typography.spacing.md,
});

export const disc = style({
  width: typography.spacing.xxxl,
  height: typography.spacing.xxxl,
  background: theme.color.surface,
  display: 'grid',
  placeItems: 'center',
  borderRadius: typography.radius.full,
  selectors: {
    [`${button}:focus &`]: {
      outline: 'transparent',
    },
    [`${button}:focus-visible &`]: {
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineOffset: '2px',
      outlineColor: theme.color.outline,
    },
  },
});

export const list = style({
  position: 'absolute',
  bottom: typography.spacing.md,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  gap: typography.spacing.sm,
});

export const dot = style({
  width: typography.spacing.sm,
  height: typography.spacing.sm,
  backgroundColor: theme.color.surface,
  borderRadius: typography.radius.full,
  pointerEvents: 'auto',
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
