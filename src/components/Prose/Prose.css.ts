import { variables } from '@frontend/styles/variables.css';
import { style, globalStyle } from '@vanilla-extract/css';

export const root = style({});

globalStyle(`${root} > * + *`, {
  marginBlockStart: variables.spacing.md,
});

globalStyle(`${root} > * + h2`, {
  marginBlockStart: variables.spacing.lg,
});

globalStyle(`${root} > * + h3`, {
  marginBlockStart: variables.spacing.lg,
});

globalStyle(`${root} strong`, {
  fontVariationSettings: "'wght' 650",
});

globalStyle(`${root} ul`, {
  listStyleType: 'disc',
  paddingLeft: '1rem',
  display: 'grid',
  rowGap: variables.spacing.xs,
});

globalStyle(`${root} ul li::marker`, {
  content: 'initial',
});
