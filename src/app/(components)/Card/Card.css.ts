import { theme } from '@frontend/styles/theme.css';
import { typography } from '@frontend/styles/typography.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: `linear-gradient(to bottom right, ${theme.color.surface}, ${theme.color.surfaceFaint})`,
  border: '1px solid',
  borderColor: theme.color.borderFaint,
  borderRadius: typography.spacing.md,
  padding: typography.spacing.md,
  height: '100%',
  '::before': {
    content: '',
    position: 'absolute',
    inset: -1,
    borderRadius: 'inherit',
    padding: 1,
    backgroundImage: `linear-gradient(to bottom right, rgba(255, 255, 255, .1), ${theme.color.borderFaint}, rgba(255, 255, 255, .1))`,
    mask: 'linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)',
    maskComposite: 'exclude',
  },
});
