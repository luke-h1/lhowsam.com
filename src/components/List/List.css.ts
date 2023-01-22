import { theme } from '@frontend/styles/theme.css';
import { typography } from '@frontend/styles/typography.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({});

export const item = style({});

globalStyle(`${root} > li + li`, {
  borderTop: `1px solid ${theme.color.border}`,
  marginBlockStart: typography.spacing.xxl,
  paddingBlockStart: typography.spacing.xxl,
});
