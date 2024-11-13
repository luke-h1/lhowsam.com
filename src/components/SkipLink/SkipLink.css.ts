import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  position: 'fixed',
  top: variables.spacing.sm,
  left: variables.spacing.sm,
  fontSize: variables.fontSize.sm,
  paddingTop: variables.spacing.sm,
  paddingBottom: variables.spacing.sm,
  paddingRight: variables.spacing.md,
  paddingLeft: variables.spacing.md,
  transform: 'translateY(-100%)',
  zIndex: 100,
  ':focus-visible': {
    transform: 'none',
  },
});
