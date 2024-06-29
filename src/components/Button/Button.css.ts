import { tokens } from '@frontend/styles/tokens.css';
import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
  backgroundColor: variables.color.surfaceStrong,
  color: variables.color.foregroundHighContrast,
  borderRadius: tokens.radius.md,
  border: '1px solid transparent',
  ':focus': {
    outline: 'transparent',
  },
  ':focus-visible': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    outlineColor: variables.color.outline,
  },
});
