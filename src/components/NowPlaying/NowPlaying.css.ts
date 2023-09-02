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
});

export const wrapper = style({
  display: 'flex',
  // marginTop: variables.spacing.md,
  padding: '0.25rem',
  marginLeft: 0,
  flexDirection: 'row-reverse',
  alignItems: 'left',
  width: '100%',
  marginBottom: variables.spacing.xs,
  '@media': {
    '(min-width: 640px)': {
      // marginLeft: '0.5rem',
      flexDirection: 'row',
    },
  },
});

export const songWrapper = style({
  display: 'inline-flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
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
  },
]);

export const notPlaying = style([...linkStyles]);

export const seperator = style({
  display: 'none',
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
  '10%': {
    transform: 'scaleY(0.3)',
  },
  '30%': {
    transform: 'scaleY(1)',
  },

  '60%': {
    transform: 'scaleY(0.5)',
  },

  '80%': {
    transform: 'scaleY(0.75)',
  },

  '100%': {
    transform: 'scaleY(0.6)',
  },
});

// export const icon = style({
//   position: 'relative',
//   display: 'inline-flex',
//   justifyContent: 'space-between',
//   width: '13px',
//   height: '13px',
//   marginRight: '8px',
//   selectors: {
//     '&:nth-of-type(2)': {
//       animationDelay: '-2.2s',
//     },
//     '&:nth-of-type(3)': {
//       animationDelay: '-3.7s',
//     },
//   },
// });

export const cover = style({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflow: 'hidden',
  borderRadius: '2px',
  opacity: 0,
  transition: 'opacity 0.3s ease-out',
});

export const spanBars = style({
  width: '2px',
  height: '100%',
  backgroundColor: '#1bd760',
  borderRadius: '3px',
  transformOrigin: 'bottom',
  transition: 'opacity 0.3s ease-out',
  animationName: bounce,
  animation: '2.2s ease infinite alternate',
  content: '',
});
