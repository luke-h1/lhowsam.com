import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  maxWidth: variables.contentWidth.container,
});

export const gradient = style({
  backgroundImage: `linear-gradient(to bottom right, ${variables.color.foreground}, ${variables.color.foregroundNeutral})`,
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});
