import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'grid',
});

export const rounded = style({
  borderRadius: variables.radius.lg,
  overflow: 'hidden',
});

export const bordered = style({
  border: `1px solid ${variables.color.border}`,
});
