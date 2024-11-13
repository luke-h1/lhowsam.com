import { responsiveStyle } from '@frontend/utils/style.css';
import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  padding: '2rem',
  gap: '2rem',
  ...responsiveStyle({
    sm: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      textAlign: 'left',
    },
  }),
});

export const imageContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'left',
  ...responsiveStyle({
    sm: {
      justifyContent: 'flex-start',
      textAlign: 'left',
    },
  }),
});

export const image = style({
  borderRadius: '12px',
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'left',
  ...responsiveStyle({
    sm: {
      alignItems: 'flex-start',
      textAlign: 'left',
    },
  }),
});
