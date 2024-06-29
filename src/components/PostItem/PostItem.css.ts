import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const content = style({
  width: '100%',
  borderBottom: '1px solid',
  borderColor: variables.color.borderNeutral,
});

export const anchor = style({
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
