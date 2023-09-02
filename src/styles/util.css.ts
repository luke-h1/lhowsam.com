import { style } from '@vanilla-extract/css';
import { variables } from './variables.css';

export const focusVisible = style({
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
