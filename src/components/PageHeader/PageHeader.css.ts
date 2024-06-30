import { tokens } from '@frontend/styles/tokens.css';
import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  paddingTop: tokens.spacing.xl,
  paddingBottom: tokens.spacing.xl,
  paddingRight: tokens.spacing.md,
  paddingLeft: tokens.spacing.md,
  backgroundColor: variables.color.pageFaint,
  backgroundImage: `linear-gradient(to right, ${variables.color.page}, ${variables.color.pageFaint})`,
});
