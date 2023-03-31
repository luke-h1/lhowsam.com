import { theme } from '@frontend/styles/theme.css';
import { typography } from '@frontend/styles/typography.css';
import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const root = style({
  position: 'fixed',
  top: typography.spacing.sm,
  left: typography.spacing.sm,
  padding: typography.spacing.sm,
  transform: `translateY(${calc.subtract('-100%', typography.spacing.sm)})`,
  zIndex: 100,
  ':focus': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    outlineColor: theme.color.outline,
    transform: 'none',
  },
});
