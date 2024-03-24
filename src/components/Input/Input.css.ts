import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  width: '100%',
  padding: variables.spacing.sm,
  border: '1px solid',
  borderColor: variables.color.border,
  backgroundColor: variables.color.surface,
  borderRadius: variables.radius.md,
  ':focus': {
    outline: 'transparent',
  },
  ':focus-visible': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    outlineColor: variables.color.outline,
  },
  marginBottom: variables.spacing.sm,
});
