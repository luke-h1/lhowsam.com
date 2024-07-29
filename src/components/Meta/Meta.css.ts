import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'grid',
  maxWidth: variables.contentWidth.container,
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: variables.spacing.md,
  borderBottom: '1px solid',
  borderColor: variables.color.border,
  paddingTop: variables.spacing.sm,
  paddingBottom: variables.spacing.xl,
  marginBottom: variables.spacing.lg,
});

export const item = style({
  display: 'grid',
  marginLeft: variables.spacing.md,
});

export const title = style({
  fontVariationSettings: '"wght" 700',
});
