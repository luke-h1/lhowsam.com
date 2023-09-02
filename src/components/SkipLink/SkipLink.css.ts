import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const root = style({
  position: 'fixed',
  top: variables.spacing.sm,
  left: variables.spacing.sm,
  padding: variables.spacing.sm,
  transform: `translateY(${calc.subtract('-100%', variables.spacing.sm)})`,
  ':focus': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    outlineColor: variables.color.outline,
    transform: 'none',
  },
});
