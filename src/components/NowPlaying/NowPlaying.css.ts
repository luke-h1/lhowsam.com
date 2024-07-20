import { variables } from '@frontend/styles/variables.css';
import { keyframes, style } from '@vanilla-extract/css';

const bar = style({
  backgroundColor: variables.color.spotifyBgColor,
});

export const bar1 = style([
  ...bar,
  {
    width: '0.25rem',
    height: '0.5rem',
    opacity: 0.75,
    marginRight: '3px',
  },
]);

export const bar2 = style([
  ...bar,
  {
    height: '0.25rem',
  },
]);

export const bar3 = style([
  ...bar,
  {
    height: '0.75rem',
    marginRight: '3px',
    opacity: 0.8,
  },
]);

export const spotifyLogo = style({
  width: '1rem',
  height: '1rem',
  marginTop: '-2px',
  marginRight: '3.5px',
  marginLeft: variables.spacing.xs,
  alignItems: 'center',
});

export const wrapper = style({
  display: 'flex',
  // marginTop: variables.spacing.md,
  padding: '0.25rem',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  width: '100%',
  marginBottom: variables.spacing.xs,
  '@media': {
    '(min-width: 640px)': {
      flexDirection: 'row',
    },
  },
});

export const songWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  alignContent: 'left',
  justifyContent: 'left',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  marginBottom: variables.spacing.md,
  '@media': {
    '(min-width: 640px)': {
      flexDirection: 'row',
    },
  },
});

const linkStyles = style({
  fontWeight: 500,
  color: variables.color.spotifyLink,
});

export const title = style([
  ...linkStyles,
  {
    maxWidth: 'max-content',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontWeight: 500,
    marginLeft: '0.5rem',
  },
]);

export const notPlaying = style([
  ...linkStyles,
  {
    marginLeft: variables.spacing.xs,
  },
]);

export const seperator = style({
  marginLeft: '0.5rem',
  marginRight: '0.5rem',
  color: '#6B7280',
  '@media': {
    '(min-width: 640px)': {
      display: 'block',
    },
  },
});

export const artist = style({
  maxWidth: 'max-content',
  color: '#6B7280',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const bounce = keyframes({
  '0%': {
    transform: 'scaleY(0.8)',
  },
  '10%': {
    transform: 'scaleY(1.2)',
  },
  '20%': {
    transform: 'scaleY(0.85)',
  },
  '30%': {
    transform: 'scaleY(1.05)',
  },
  '40%': {
    transform: 'scaleY(0.95)',
  },
  '50%': {
    transform: 'scaleY(1)',
  },
  '60%': {
    transform: 'scaleY(0.95)',
  },
  '70%': {
    transform: 'scaleY(1.05)',
  },
  '80%': {
    transform: 'scaleY(0.85)',
  },
  '90%': {
    transform: 'scaleY(1.2)',
  },
  '100%': {
    transform: 'scaleY(0.8)',
  },
});

export const icon = style({
  position: 'relative',
  display: 'inline-flex',
  justifyContent: 'space-between',
  width: '13px',
  height: '13px',
  marginRight: '8px',
  selectors: {
    '&:nth-of-type(2)': {
      animationDelay: '-2.2s',
    },
    '&:nth-of-type(3)': {
      animationDelay: '-3.7s',
    },
  },
});

export const cover = style({
  transition: 'opacity 0.3s ease-out',
  display: 'flex',
  marginBottom: variables.spacing.xs,
});

export const spanBars = style({
  // width: '2px',
  // height: '100%',
  // backgroundColor: '#1bd760',
  // borderRadius: '3px',
  // transformOrigin: 'bottom',
  // transition: 'opacity 0.3s ease-out',
  // animationName: bounce,
  // animation: '2.2s ease infinite alternate',
  // content: '',
  animationName: bounce,
  animationDuration: '1.5s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'ease-in-out',
  animationDelay: '0s',
  content: '',
});
