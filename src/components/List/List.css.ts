import { variables } from '@frontend/styles/variables.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({});

export const item = style({});

globalStyle(`${root} > li + li`, {
  borderTop: `1px solid ${variables.color.border}`,
  marginBlockStart: variables.spacing.xxl,
  paddingBlockStart: variables.spacing.xxl,
});
