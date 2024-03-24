import { variables } from '@frontend/styles/variables.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  ':focus': {
    outline: 'transparent',
  },
  ':focus-visible': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    outlineColor: variables.color.outline,
  },
  ':hover': {
    textDecoration: 'underline',
  },
});

export const variants = styleVariants({
  highlight: [root, { textDecorationColor: variables.color.highlight }],
  neutral: [root, { textDecorationColor: variables.color.underlineNeutral }],
});
