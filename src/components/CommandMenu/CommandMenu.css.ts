import { variables } from '@frontend/styles/variables.css';
import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const banner = style({
  display: 'flex',
  alignItems: 'left',
  marginInline: 'auto',
  textAlign: 'left',
  '@media': {
    'screen and (min-width: 768px)': {
      maxWidth: variables.contentWidth.text,
      '::before': {
        content: '',
        width: variables.spacing.xxl,
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
  width: variables.spacing.xxl,
  height: variables.spacing.xxl,
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

const fadeIn = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
});

const fadeOut = keyframes({
  '0%': { opacity: '1' },
  '100%': { opacity: '0' },
});

const enter = keyframes({
  '0%': { opacity: '0', transform: 'scale(.85) translateX(-50%)' },
  '100%': { opacity: '1', transform: 'scale(1) translateX(-50%)' },
});

const exit = keyframes({
  '0%': { opacity: '1', transform: 'scale(1) translateX(-50%)' },
  '100%': { opacity: '0', transform: 'scale(.95) translateX(-50%)' },
});

globalStyle('[cmdk-overlay]', {
  position: 'fixed',
  inset: 0,
  backgroundColor: variables.color.overlay,
  backdropFilter: 'blur(8px)',
});

globalStyle('[cmdk-dialog]', {
  transformOrigin: '0 0',
  position: 'fixed',
  zIndex: 999,
  top: variables.spacing.xxxxl,
  left: '50%',
  transform: 'translateX(-50%)',
  maxWidth: 640,
  width: calc.subtract('100%', calc.multiply(variables.spacing.md, 2)),
  '@media': {
    'screen and (min-width: 576px)': {
      marginTop: '8rem',
    },
  },
});

globalStyle('[cmdk-overlay][data-state="open"]', {
  animationName: fadeIn,
  animationDuration: '150ms',
});

globalStyle('[cmdk-overlay][data-state="closed"]', {
  animationName: fadeOut,
  animationDuration: '200ms',
});

globalStyle('[cmdk-dialog][data-state="open"]', {
  animationName: enter,
  animationDuration: '200ms',
});

globalStyle('[cmdk-dialog][data-state="closed"]', {
  animationName: exit,
  animationDuration: '150ms',
});

globalStyle('[cmdk-root]', {
  width: '100%',
  backgroundColor: variables.color.surface,
  border: `1px solid ${variables.color.border}`,
  borderRadius: variables.radius.md,
});

globalStyle('[cmdk-header]', {
  position: 'relative',
});

globalStyle('[cmdk-header-esc]', {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: variables.spacing.md,
  fontSize: variables.fontSize.xs,
  padding: `${variables.spacing.xs} ${variables.spacing.sm}`,
  color: variables.color.foregroundNeutral,
  borderRadius: variables.radius.md,
  cursor: 'pointer',
  border: `1px solid ${variables.color.border}`,
});

globalStyle('[cmdk-input]', {
  position: 'relative',
  fontFamily: variables.font.sans,
  fontSize: variables.fontSize.md,
  width: '100%',
  padding: variables.spacing.md,
  paddingInlineEnd: calc.add(calc.multiply(variables.spacing.md, 2), '45px'),
  borderBottom: `1px solid ${variables.color.border}`,
});

globalStyle('[cmdk-input]::placeholder', {
  color: variables.color.foregroundNeutral,
});

globalStyle('[cmdk-list]', {
  height: 'min(300px, calc(var(--cmdk-list-height)) + 32px)',
  maxHeight: 400,
  overflow: 'auto',
  overscrollBehavior: 'contain',
  transition: '100ms ease',
  transitionProperty: 'height',
  paddingBlock: variables.spacing.md,
  scrollPaddingBlock: variables.spacing.md,
});

globalStyle('*:not([hidden]) + [cmdk-group]', {
  marginBlockStart: variables.spacing.md,
});

globalStyle('[cmdk-group-heading]', {
  position: 'relative',
  userSelect: 'none',
  fontSize: variables.fontSize.xs,
  color: variables.color.foregroundNeutral,
  paddingInline: variables.spacing.md,
  marginBlockEnd: variables.spacing.sm,
  zIndex: 10,
});

globalStyle('[cmdk-item]', {
  display: 'flex',
  alignItems: 'center',
  gap: variables.spacing.sm,
  position: 'relative',
  cursor: 'pointer',
  fontSize: variables.fontSize.sm,
  paddingInline: variables.spacing.md,
  paddingBlock: variables.spacing.sm,
});

globalStyle('[cmdk-item] .content', {
  display: 'flex',
  alignItems: 'center',
  gap: variables.spacing.sm,
  position: 'relative',
  zIndex: 10,
});

globalStyle('[cmdk-item] .highlight', {
  position: 'absolute',
  inset: `0 ${variables.spacing.sm}`,
  borderRadius: variables.radius.md,
  backgroundColor: variables.color.surfaceHover,
});

globalStyle('[cmdk-item] svg', {
  width: '.9rem',
  color: variables.color.foregroundNeutral,
  transition: 'ease-in-out 0.1s',
  transitionDelay: '0.1s',
});

globalStyle("[cmdk-item][aria-selected='true'] svg", {
  color: variables.color.foreground,
});

globalStyle('[cmdk-empty]', {
  textAlign: 'center',
  color: variables.color.foregroundNeutral,
  fontSize: variables.fontSize.sm,
});
