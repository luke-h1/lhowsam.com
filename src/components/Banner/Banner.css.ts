import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const banner = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginInline: 'auto',
  marginBlockEnd: variables.spacing.xxxl,
  textAlign: 'center',
  '@media': {
    'screen and (min-width: 768px)': {
      maxWidth: variables.contentWidth.text,
      '::before': {
        content: '',
        width: variables.spacing.xxxl,
      },
    },
  },
});

export const avatar = style({
  // position: "relative",
  display: 'inline-flex',
  borderRadius: variables.radius.lg,
  // border: `1px solid ${variables.color.borderFaint}`,
  overflow: 'hidden',
  ':focus': {
    outline: 'transparent',
  },
  ':focus-visible': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    outlineColor: variables.color.outline,
  },
});

export const logo = style({
  position: 'absolute',
  inset: 0,
  display: 'grid',
  placeItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, .5)',
  opacity: 0,
  transitionTimingFunction: 'ease-in-out',
  transitionDuration: '200ms',
  transitionProperty: 'opacity',
  selectors: {
    [`${avatar}:hover &`]: {
      opacity: 1,
    },
    [`${avatar}:focus &`]: {
      opacity: 1,
    },
  },
});

export const toggle = style({
  position: 'relative',
  width: variables.spacing.xxxl,
  height: variables.spacing.xxxl,
  display: 'grid',
  placeItems: 'center',
  borderRadius: variables.radius.md,
  cursor: 'pointer',
  transitionTimingFunction: 'ease-in-out',
  transitionDuration: '200ms',
  transitionProperty: 'background-color',
  ':focus': {
    outline: 'transparent',
  },
  ':focus-visible': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    outlineColor: variables.color.outline,
  },
});

export const toggleHighlight = style({
  position: 'absolute',
  inset: 0,
  backgroundColor: variables.color.surfaceHover,
  borderRadius: variables.radius.md,
  zIndex: '-1',
  opacity: 0,
  transform: 'scale(0)',
  transition: 'all ease-in-out 200ms',
  selectors: {
    [`${toggle}:hover &`]: {
      opacity: 1,
      transform: 'scale(1)',
    },
    [`${toggle}:focus-visible &`]: {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
});
