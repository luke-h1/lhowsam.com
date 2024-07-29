import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  display: 'flex',
  overflow: 'hidden',
  ':after': {
    content: '',
    position: 'absolute',
    inset: 0,
    backgroundImage: `linear-gradient(to right, ${variables.color.page} 0%, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90% ${variables.color.page} 100%)`,
    pointerEvents: 'none',
  },
});

export const scroller = style({
  display: 'flex',
  flexShrink: 0,
  whiteSpace: 'nowrap',
});

export const item = style({
  paddingRight: variables.spacing.xl,
  display: 'grid',
  placeItems: 'center',
  flexShrink: 0,
  color: variables.color.foregroundNeutral,
});
