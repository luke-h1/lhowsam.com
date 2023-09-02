import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: variables.spacing.md,
  borderBottom: '1px solid',
  borderColor: variables.color.borderFaint,
  paddingTop: variables.spacing.md,
  paddingBottom: variables.spacing.md,
});

export const item = style({
  display: 'grid',
});

export const title = style({
  fontVariationSettings: '"wght" 700',
});
