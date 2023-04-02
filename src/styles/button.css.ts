import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { theme } from './theme.css';
import { typography } from './typography.css';

export const buttonStyles = recipe({
  base: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    gap: typography.spacing.xs,
    paddingTop: typography.spacing.xs,
    paddingRight: typography.spacing.md,
    paddingBottom: typography.spacing.xs,
    paddingLeft: typography.spacing.md,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semiBold,
    border: '1px solid',
    borderColor: 'transparent',
    borderRadius: typography.radii.lg,
  },
  variants: {
    type: {
      filled: {
        backgroundColor: theme.color.surfaceInverted,
        color: theme.color.foregroundInverted,
      },
      outlined: {
        borderColor: theme.color.border,
        backgroundImage: `linear-gradient(to bottom right, ${theme.color.surface}, ${theme.color.page})`,
        ':before': {
          content: '',
          position: 'absolute',
          inset: -1,
          borderRadius: 'inherit',
          padding: 1,
          backgroundImage: `linear-gradient(to bottom right, rgba(255, 255, 255, .2), ${theme.color.borderFaint}, rgba(255, 255, 255, .1))`,
          mask: 'linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)',
          maskComposite: 'exclude',
          pointerEvents: 'none',
        },
      },
    },
  },
  defaultVariants: {
    type: 'filled',
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonStyles>;
