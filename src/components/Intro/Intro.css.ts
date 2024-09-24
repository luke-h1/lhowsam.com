import { variables } from '@frontend/styles/variables.css';
import { responsiveStyle } from '@frontend/utils/style.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1.5rem',
  maxWidth: '75ch',
  ...responsiveStyle({
    sm: {
      marginBottom: variables.spacing.xl,
    },
  }),
});

globalStyle(`${page} & p`, {
  fontSize: '1.1rem',
  lineHeight: 1.4,
  fontWeight: 500,
  letterSpacing: '0.01em',
  textWrap: 'pretty',
});

export const title = style({
  fontWeight: 400,
  fontSize: variables.fontSize.xxxxl,
  lineHeight: 1.1,
  letterSpacing: '-0.0125em',
});

globalStyle(`${title} & strong`, {
  fontWeight: 700,
});

globalStyle(`${title} & a`, {
  textDecoration: 'underline',
  textUnderlineOffset: '0.125em',
  textDecorationThickness: '0.075em',
});
