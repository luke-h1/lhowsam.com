import { variables } from '@frontend/styles/variables.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({});

export const item = style({});

globalStyle(`${root} > li + li`, {
  borderTop: `1px solid ${variables.color.borderFaint}`,
  marginBlockStart: variables.spacing.md,
  paddingBlockStart: variables.spacing.md,
});
