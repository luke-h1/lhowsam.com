import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  gap: variables.spacing.sm,
});

export const item = style({
  display: 'grid',
  placeItems: 'center',
  cursor: 'pointer',
  width: '1.5rem',
  height: '1.5rem',
  borderRadius: variables.radius.sm,
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
