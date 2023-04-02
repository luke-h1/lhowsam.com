import { theme } from '@frontend/styles/theme.css';
import { typography } from '@frontend/styles/typography.css';
import { style } from '@vanilla-extract/css';

export const banner = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginInline: 'auto',
  marginBlockEnd: typography.spacing.xxxl,
  textAlign: 'center',
  '@media': {
    'screen and (min-width: 768px)': {
      maxWidth: typography.contentWidth.text,
      '::before': {
        content: '',
        width: typography.spacing.xxxl,
      },
    },
  },
});

export const avatar = style({
  position: 'relative',
  display: 'inline-flex',
  borderRadius: typography.radii.lg,
  border: `1px solid ${theme.color.border}`,
  overflow: 'hidden',
  ':focus': {
    outline: 'transparent',
  },
  ':focus-visible': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    outlineColor: theme.color.outline,
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
  width: typography.spacing.xxxl,
  height: typography.spacing.xxxl,
  display: 'grid',
  placeItems: 'center',
  borderRadius: typography.radii.md,
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
    outlineColor: theme.color.outline,
  },
});

export const toggleHighlight = style({
  position: 'absolute',
  inset: 0,
  backgroundColor: theme.color.surfaceHover,
  borderRadius: typography.radii.md,
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
