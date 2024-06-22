import { style } from '@vanilla-extract/css';
import { variables } from './variables.css';

export const focusVisible = style({
  ':focus': {
    outline: 'transparent',
    color: 'inherit',
  },
  ':focus-visible': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
  },
});

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0.5rem',
  height: 'calc(100vh - 1rem)',
  position: 'relative',
  borderRadius: '8px',
  padding: '2rem 2rem',
  order: 1,
  flexGrow: 1,
  marginLeft: '15.5rem',
  overflow: 'auto',
  transition: 'background-color 0.2s ease',
  boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.035)',
});
