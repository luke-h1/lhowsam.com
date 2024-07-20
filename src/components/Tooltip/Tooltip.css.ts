import { variables } from '@frontend/styles/variables.css';
import { keyframes, style } from '@vanilla-extract/css';

const slideDown = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const content = style({
  padding: variables.spacing.sm,
  borderRadius: variables.radius.md,
  fontSize: variables.fontSize.sm,
  backgroundColor: variables.color.surface,
  color: variables.color.foreground,
  animationDuration: '250ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  selectors: {
    '&[data-side="top"]': { animationName: slideUp },
    '&[data-side="bottom"]': { animationName: slideDown },
  },
});

export const arrow = style({
  fill: variables.color.surface,
});
