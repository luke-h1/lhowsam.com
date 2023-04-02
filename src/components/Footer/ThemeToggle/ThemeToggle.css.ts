import { theme } from '@frontend/styles/theme.css';
import { typography } from '@frontend/styles/typography.css';
import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: typography.spacing.xs,
  border: '1px solid',
  borderColor: theme.color.border,
  width: 'max-content',
  height: '2.125rem',
  paddingLeft: typography.spacing.xs,
  paddingRight: typography.spacing.xs,
  borderRadius: typography.radii.full,
});

globalStyle(`.dark ${root}::before`, {
  content: '',
  position: 'absolute',
  inset: -1,
  borderRadius: 'inherit',
  padding: 1,
  backgroundImage: `linear-gradient(to bottom right, rgba(255, 255, 255, .2), ${theme.color.borderFaint}, rgba(255, 255, 255, .1))`,
  mask: 'linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)',
  maskComposite: 'exclude',
  pointerEvents: 'none',
});

export const toggle = style({
  position: 'relative',
  display: 'grid',
  placeItems: 'center',
  width: '2rem',
  height: '1.5rem',
  background: 'transparent',
  borderRadius: '1.5rem',
  transition: '0.2s',
  transitionProperty: 'color',
  ':hover': {
    color: theme.color.foreground,
    cursor: 'pointer',
  },
});

export const toggleVariant = styleVariants({
  initial: [toggle, { color: theme.color.foregroundNeutral }],
  active: [toggle, { color: theme.color.foreground }],
});

export const shadow = style({
  position: 'absolute',
  inset: 0,
  width: '2rem',
  height: '1.5rem',
  background: theme.color.borderFaint,
  borderRadius: '1.5rem',
  zIndex: -1,
});
