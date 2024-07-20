import { variables } from '@frontend/styles/variables.css';
import { globalStyle, keyframes, style } from '@vanilla-extract/css';

export const settingButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '26px',
  height: '26px',
  borderRadius: '4px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#F5F5F5',
  },
  ':focus': {
    backgroundColor: '#F5F5F5',
    outline: 'none',
  },
});

const slideDownAndFade = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(-2px)',
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

export const popover = style({
  borderRadius: '5px',
  padding: '12px 12px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  lineHeight: 1,
  backgroundColor: variables.color.border,
  boxShadow:
    'hsl(206 22% 7% / 60%) 0px 10px 38px -10px, hsl(206 22% 7% / 30%) 0px 10px 20px -15px',

  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      animationDuration: '250ms',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      animationFillMode: 'forwards',
      willChange: 'transform, opacity',
    },
  },
});

globalStyle('popover:[data-side="top"]', { animationName: slideUpAndFade });
globalStyle('popover:[data-side="right"]', {
  animationName: slideRightAndFade,
});
globalStyle('popover:[data-side="bottom"]', {
  animationName: slideDownAndFade,
});
globalStyle('popover:[data-side="left"]', { animationName: slideLeftAndFade });

export const checkbox = style({
  all: 'unset',
  width: '1rem',
  height: '1rem',
  borderRadius: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.2s ease',
  marginRight: '0.5rem',
  ':hover': {
    backgroundColor: '#F5F5F5',
  },
  ':focus': {
    boxShadow: '0 0 0 2px #F5F5F5',
  },
});
