import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  paddingTop: variables.spacing.xl,
  paddingBottom: variables.spacing.xl,
  paddingRight: variables.spacing.md,
  marginBottom: variables.spacing.sm,
  // paddingLeft: variables.spacing.md,
  //   backgroundColor: variables.color.page,
  // backgroundImage: `linear-gradient(to right, ${themeVars.color.page}, ${themeVars.color.pageFaint})`,
});
