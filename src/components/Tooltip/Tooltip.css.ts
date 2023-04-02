import { theme } from '@frontend/styles/theme.css';
import { typography } from '@frontend/styles/typography.css';
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
  padding: typography.spacing.sm,
  borderRadius: typography.radii.md,
  fontSize: typography.fontSize.sm,
  backgroundColor: theme.color.surface, // surface strong potentially
  //   color: theme.color. // foreground high contrast potentially
  color: theme.color.foregroundNeutral,
  animationDuration: '250ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  selectors: {
    '&[data-side="top"]': { animationName: slideUp },
    '&[data-side="bottom"]': { animationName: slideDown },
  },
});

export const arrow = style({
  // fill: theme.color.surfaceStrong, // surface strong potentially
  fill: theme.color.surface,
});
