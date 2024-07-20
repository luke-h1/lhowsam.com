import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left',
  alignItems: 'flex-start',
  paddingBottom: variables.spacing.lg,
});
