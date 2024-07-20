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
  left: variables.spacing.sm,
  top: 0,
  width: variables.spacing.md,
  height: '100%',
  pointerEvents: 'none',
});

export const select = style({
  border: '1px solid',
  borderColor: variables.color.border,
  paddingTop: variables.spacing.xs,
  paddingBottom: variables.spacing.xs,
  paddingRight: calc.add(
    calc.multiply(variables.spacing.sm, 2),
    variables.spacing.md,
  ),
  paddingLeft: calc.add(
    calc.multiply(variables.spacing.sm, 2),
    variables.spacing.md,
  ),
  height: '2rem',
  fontSize: variables.fontSize.sm,
  borderRadius: variables.radius.md,
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
  right: variables.spacing.sm,
  top: 0,
  width: variables.spacing.md,
  height: '100%',
  pointerEvents: 'none',
});
