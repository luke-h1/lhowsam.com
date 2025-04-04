import { gray } from '@radix-ui/colors';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { variables } from './variables.css';

export const buttonStyles = recipe({
  base: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    gap: variables.spacing.xs,
    paddingTop: variables.spacing.xs,
    paddingRight: variables.spacing.md,
    paddingBottom: variables.spacing.xs,
    paddingLeft: variables.spacing.md,
    fontSize: variables.fontSize.sm,
    fontWeight: variables.fontWeight.semiBold,
    border: '1px solid',
    borderColor: 'transparent',
    borderRadius: variables.radii.lg,
    cursor: 'pointer',
  },
  variants: {
    type: {
      highContrast: {
        backgroundColor: variables.color.highlight,
        color: gray.gray12,
      },
      neutral: {
        backgroundColor: variables.color.surfaceNeutral,
        color: variables.color.foreground,
      },
      outlined: {
        borderColor: variables.color.border,
        backgroundImage: `linear-gradient(to bottom right, ${variables.color.surface}, ${variables.color.page})`,
        ':before': {
          content: '',
          position: 'absolute',
          inset: -1,
          borderRadius: 'inherit',
          padding: 1,
          backgroundImage: `linear-gradient(to bottom right, rgba(255, 255, 255, .2), ${variables.color.borderFaint}, rba(255, 255, 255, .1))`,
          mask: 'linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)',
          maskComposite: 'exclude',
          pointerEvents: 'none',
        },
      },
      text: {
        backgroundColor: 'transparent',
        color: variables.color.foregroundNeutral,
        padding: 0,
        ':hover': {
          color: variables.color.foreground,
        },
      },
    },
  },
  defaultVariants: {
    type: 'highContrast',
  },
});
export type ButtonVariants = RecipeVariants<typeof buttonStyles>;
