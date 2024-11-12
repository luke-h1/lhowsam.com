import { variables } from '@frontend/styles/variables.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  maxWidth: variables.contentWidth.prose,
  fontWeight: 575,
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
