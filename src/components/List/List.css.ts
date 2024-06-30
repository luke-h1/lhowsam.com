import { tokens } from '@frontend/styles/tokens.css';
import { variables } from '@frontend/styles/variables.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({});

export const item = style({
  marginBottom: tokens.spacing.md,
});

globalStyle(`${root} > li + li`, {
  borderTop: `1px solid ${variables.color.border}`,
  marginBlockStart: tokens.spacing.xxl,
  paddingBlockStart: tokens.spacing.xxl,
});
