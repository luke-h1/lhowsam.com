import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  paddingTop: variables.spacing.xs,
  marginBottom: variables.spacing.md,
  paddingBottom: 0,
});
