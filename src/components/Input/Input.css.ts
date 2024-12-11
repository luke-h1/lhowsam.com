import { variables } from '@frontend/styles/variables.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({
  width: '50%',
  padding: variables.spacing.sm,
  border: '1px solid',
  borderColor: variables.color.border,
  backgroundColor: variables.color.surface,
  borderRadius: variables.radii.md,
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

globalStyle(`${root}::placeholder`, {
  color: variables.color.foregroundNeutral,
});
