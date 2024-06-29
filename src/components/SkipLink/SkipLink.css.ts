import { tokens } from '@frontend/styles/tokens.css';
import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const root = style({
  position: 'fixed',
  top: tokens.spacing.sm,
  left: tokens.spacing.sm,
  padding: tokens.spacing.sm,
  transform: `translateY(${calc.subtract('-100%', tokens.spacing.sm)})`,
  ':focus': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    outlineColor: variables.color.outline,
    transform: 'none',
  },
});
