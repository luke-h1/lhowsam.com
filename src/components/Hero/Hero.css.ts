import { tokens } from '@frontend/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: tokens.spacing.lg,
});
