import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: `linear-gradient(to bottom right, ${variables.color.surface}, ${variables.color.page})`,
  border: '1px solid',
  borderColor: variables.color.borderFaint,
  borderRadius: variables.spacing.md,
  padding: variables.spacing.md,
  height: '100%',
  marginBottom: variables.spacing.md,
  // align when there is less content on one card than the other
  alignItems: 'stretch',
  // align when there is more content on one card than the other
  '@media': {
    'screen and (min-width: 768px)': {
      alignItems: 'flex-start',
    },
  },
  '::before': {
    content: '',
    position: 'absolute',
    inset: -1,
    borderRadius: 'inherit',
    padding: 1,
    backgroundImage: `linear-gradient(to bottom right, rgba(255, 255, 255, .1), ${variables.color.borderFaint}, rgba(255, 255, 255, .1))`,
    mask: 'linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)',
    maskComposite: 'exclude',
    pointerEvents: 'none',
  },
});
