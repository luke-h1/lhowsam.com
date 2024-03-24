import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: variables.spacing.md,
  borderBottom: '1px solid',
  borderColor: variables.color.borderFaint,
  paddingTop: variables.spacing.sm,
  paddingBottom: variables.spacing.sm,
});

export const item = style({
  display: 'grid',
});

export const title = style({
  fontVariationSettings: '"wght" 700',
});
