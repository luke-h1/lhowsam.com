import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const list = style({
  position: 'relative',
});

export const item = style({
  paddingTop: variables.spacing.lg,
  paddingBottom: variables.spacing.lg,
  borderColor: variables.color.border,
  borderBottom: `1px solid ${variables.color.border}`,
  listStyle: 'none',
  ':last-child': {
    borderBottom: 'none',
  },
});
