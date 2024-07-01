import { tokens } from '@frontend/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  paddingBottom: tokens.spacing.lg,
  margin: '0 auto',
});
