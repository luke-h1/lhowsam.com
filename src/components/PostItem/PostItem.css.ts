import { responsiveStyle } from '@frontend/styles/style.css';
import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const content = style({
  width: '100%',
  borderBottom: '1px solid',
  borderColor: variables.color.borderNeutral,
  padding: '2.4rem',
});

export const heading = style({
  ...responsiveStyle({
    sm: {
      marginTop: variables.spacing.md,
      marginBottom: variables.spacing.sm,
    },
  }),
});

export const intro = style({
  ...responsiveStyle({
    sm: {
      marginBottom: '1.5rem',
    },
  }),
});
