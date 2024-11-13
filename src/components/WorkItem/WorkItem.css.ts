import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const content = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
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

export const image = style({
  borderRadius: '8px',
});
