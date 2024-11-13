import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  padding: '2rem',
  gap: '2rem',
  '@media': {
    'screen and (min-width: 768px)': {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
  },
});

export const imageContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'left',

  '@media': {
    'screen and (min-width: 768px)': {
      justifyContent: 'flex-start',
      textAlign: 'left',
    },
  },
});

export const image = style({
  filter: 'grayscale(1)',
  opacity: 0.45,
  borderRadius: '8px',
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'left',
  '@media': {
    'screen and (min-width: 768px)': {
      alignItems: 'flex-start',
      textAlign: 'left',
    },
  },
});
