import { focusVisible } from '@frontend/styles/util.css';
import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
});

export const anchor = style([
  focusVisible,
  {
    marginTop: variables.spacing.lg,
    display: 'inline-flex',
  },
]);
