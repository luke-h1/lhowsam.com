import { variables } from '@frontend/styles/variables.css';
import { responsiveStyle } from '@frontend/utils/style.css';
import { style, globalStyle } from '@vanilla-extract/css';

export const group = style({
  display: 'flex',
  // alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  marginBottom: variables.spacing.md,

  ...responsiveStyle({
    sm: {
      display: 'inline',
    },
    md: {
      flexDirection: 'row',
    },
  }),
});

globalStyle(`${group} > *`, {
  marginBottom: 0,
  ...responsiveStyle({
    sm: {
      marginRight: variables.spacing.sm,
    },
  }),
});

globalStyle(`${group} > * + *`, {
  marginLeft: 0,
  marginTop: variables.spacing.md,
  ...responsiveStyle({
    md: {
      marginLeft: variables.spacing.md,
      marginTop: 0,
    },
  }),
});
