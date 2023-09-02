import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  borderCollapse: 'separate',
  borderSpacing: 0,
  width: '100%',
});

export const heading = style({
  padding: variables.spacing.sm,
  fontSize: variables.fontSize.sm,
  color: variables.color.foregroundNeutral,
  textTransform: 'uppercase',
});

export const cell = style({
  padding: variables.spacing.sm,
  borderTop: '1px solid',
  borderColor: variables.color.border,
});
