import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { variables } from './variables.css';

export const linkStyles = recipe({
  base: {
    position: 'relative',
  },
  variants: {
    underlined: {
      true: {
        textDecoration: 'underline',
        textDecorationColor: variables.color.underline,
        textDecorationThickness: '1.5',
        textUnderlineOffset: '1.5',
        ':hover': {
          textDecorationColor: 'currentcolor',
        },
      },
    },
  },
  defaultVariants: {
    underlined: true,
  },
});

export type LinkVariants = RecipeVariants<typeof linkStyles>;
