import { style } from '@vanilla-extract/css';

export const group = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  marginBottom: '30px',
  '@media': {
    'min-width: 300px': {
      flexDirection: 'row',
      selectors: {
        'button, a': {
          marginBottom: '0',
          marginRight: '15px',
        },
      },
    },
  },
  selectors: {
    '> button, > a': {
      marginBottom: '20px',
      marginRight: '0',
    },
    '> :last-child': {
      marginRight: '0',
    },
  },
});
