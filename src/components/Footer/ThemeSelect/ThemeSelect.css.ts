import { theme } from '@frontend/styles/theme.css';
import { typography } from '@frontend/styles/typography.css';
import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const root = style({
  position: 'relative',
  display: 'inline-flex',
  height: '2rem',
  width: 'min-content',
});

export const icon = style({
  position: 'absolute',
  display: 'grid',
  placeItems: 'center',
  left: typography.spacing.sm,
  top: 0,
  width: typography.spacing.md,
  height: '100%',
  pointerEvents: 'none',
});

export const select = style({
  border: '1px solid',
  borderColor: theme.color.border,
  paddingTop: typography.spacing.xs,
  paddingBottom: typography.spacing.xs,
  paddingRight: calc.add(
    calc.multiply(typography.spacing.sm, 2),
    typography.spacing.md,
  ),
  paddingLeft: calc.add(
    calc.multiply(typography.spacing.sm, 2),
    typography.spacing.md,
  ),
  height: '2rem',
  fontSize: typography.fontSize.sm,
  borderRadius: typography.radius.md,
  textAlign: 'left',
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

export const arrow = style({
  position: 'absolute',
  display: 'grid',
  placeItems: 'center',
  right: typography.spacing.sm,
  top: 0,
  width: typography.spacing.md,
  height: '100%',
  pointerEvents: 'none',
});
