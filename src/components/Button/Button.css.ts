import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  padding: `${variables.spacing.sm} ${variables.spacing.md}`,
  backgroundColor: variables.color.surfaceStrong,
  color: variables.color.foregroundHighContrast,
  borderRadius: variables.radius.md,
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
