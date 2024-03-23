import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: variables.spacing.sm,
  padding: variables.spacing.md,
  borderRadius: variables.radius.md,
  backgroundColor: variables.color.surface,
  color: variables.color.foregroundNeutral,
});

export const icon = style({
  display: 'grid',
  marginTop: 3,
});

export const content = style({
  fontSize: variables.fontSize.sm,
});
