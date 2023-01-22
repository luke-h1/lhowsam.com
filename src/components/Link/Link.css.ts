import { theme } from '@frontend/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  textDecoration: 'underline',
  ':focus': {
    outline: 'transparent',
  },
  ':focus-visible': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    outlineColor: theme.color.outline,
  },
});

export const variants = styleVariants({
  highlight: [root, { textDecorationColor: theme.color.underline }],
  neutral: [root, { textDecorationColor: theme.color.underlineNeutral }],
});
