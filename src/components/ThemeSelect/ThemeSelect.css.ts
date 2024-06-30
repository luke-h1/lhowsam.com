import { tokens } from '@frontend/styles/tokens.css';
import { variables } from '@frontend/styles/variables.css';
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
  left: tokens.spacing.sm,
  top: 0,
  width: tokens.spacing.md,
  height: '100%',
  pointerEvents: 'none',
});

export const select = style({
  border: '1px solid',
  borderColor: variables.color.border,
  paddingTop: tokens.spacing.xs,
  paddingBottom: tokens.spacing.xs,
  paddingRight: calc.add(
    calc.multiply(tokens.spacing.sm, 2),
    tokens.spacing.md,
  ),
  paddingLeft: calc.add(calc.multiply(tokens.spacing.sm, 2), tokens.spacing.md),
  height: '2rem',
  fontSize: tokens.fontSize.sm,
  borderRadius: tokens.radius.md,
  textAlign: 'left',
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

export const arrow = style({
  position: 'absolute',
  display: 'grid',
  placeItems: 'center',
  right: tokens.spacing.sm,
  top: 0,
  width: tokens.spacing.md,
  height: '100%',
  pointerEvents: 'none',
});
