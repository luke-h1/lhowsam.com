import { keyframes, style } from '@vanilla-extract/css';
import { variables } from './variables.css';

export const focusVisible = style({
  ':focus': {
    outline: 'transparent',
    color: 'inherit',
  },
  ':focus-visible': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
  },
});

const slideDownAndFade = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});
const slideLeftAndFade = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0)',
  },
});
const slideUpAndFade = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});
const slideRightAndFade = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0)',
  },
});

/* tooltip  */
export const tooltip = style({
  borderRadius: '5px',
  padding: '6px 8px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontSize: variables.fontSize.sm,
  lineHeight: 1,
  color: variables.color.gray,
  backgroundColor: variables.color.modalBg,
  boxShadow:
    'hsl(206 22% 7% / 80%) 0px 10px 38px -10px, hsl(206 22% 7% / 50%) 0px 10px 20px -15px',
  zIndex: 999,

  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      animationDuration: '300ms',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      animationFillMode: 'forwards',
      willChange: 'transform, opacity',
      // selectors: {
      //   '[data-state="delayed-open"][data-side="top"]': {
      //     animationName: slideDownAndFade,
      //   },
      //   '[data-state="delayed-open"][data-side="right"]': {
      //     animationName: slideLeftAndFade,
      //   },
      //   '[data-state="delayed-open"][data-side="bottom"]': {
      //     animationName: slideUpAndFade,
      //   },
      //   '[data-state="delayed-open"][data-side="left"]': {
      //     animationName: slideRightAndFade,
      //   },
      // },
    },
  },
});

export const tooltipLarge = style({
  borderRadius: '0.5rem',
  padding: '14px 18px',
  boxShadow:
    'hsl(206 22% 7% / 30%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
});

export const viewTruncated = style({
  fontSize: variables.fontSize.md,
  lineHeight: 1.35,
  color: variables.color.gray,
  maxWidth: '300px',
});

export const arrow = style({ fill: variables.color.modalBg });

export const flexRow = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
});
