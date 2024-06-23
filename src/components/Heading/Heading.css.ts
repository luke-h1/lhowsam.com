import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  fontWeight: 575,
  marginBottom: '1.5rem',
  transition: 'color 0.25s ease',
});

export const tracking = styleVariants({
  h1: {
    letterSpacing: '-0.02em',
  },
  h2: {},
  h3: {},
  h4: {},
  h5: {},
  h6: {},
});
