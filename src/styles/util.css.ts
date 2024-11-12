import { globalStyle, style } from '@vanilla-extract/css';
import { variables } from './variables.css';

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

globalStyle(`${anchor}:hover`, {
  textDecoration: 'underline',
});

export const tag = style({
  marginRight: '0.5rem',
  ':last-child': {
    marginRight: 0,
  },
  // ensure it wraps each full word
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  display: 'inline-block',
});

export const focusVisible = style({
  ':focus': {
    outline: 'transparent',
    color: 'inherit',
  },
  ':focus-visible': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    outlineColor: variables.color.outline,
  },
});
