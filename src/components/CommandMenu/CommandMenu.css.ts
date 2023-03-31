import { theme } from '@frontend/styles/theme.css';
import { typography } from '@frontend/styles/typography.css';
import { globalStyle, keyframes } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

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
  backgroundColor: theme.color.overlay,
  backdropFilter: 'blur(8px)',
});

globalStyle('[cmdk-dialog]', {
  transformOrigin: '0 0',
  position: 'fixed',
  top: typography.spacing.xxxxl,
  left: '50%',
  transform: 'translateX(-50%)',
  maxWidth: 640,
  width: calc.subtract('100%', calc.multiply(typography.spacing.md, 2)),
  zIndex: 9999,
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
  backgroundColor: theme.color.surface,
  border: `1px solid ${theme.color.border}`,
  borderRadius: typography.radius.md,
});

globalStyle('[cmdk-header]', {
  position: 'relative',
});

globalStyle('[cmdk-header-esc]', {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: typography.spacing.md,
  fontSize: typography.fontSize.xs,
  padding: `${typography.spacing.xs} ${typography.spacing.sm}`,
  color: theme.color.foregroundNeutral,
  borderRadius: typography.radius.md,
  cursor: 'pointer',
  border: `1px solid ${theme.color.border}`,
});

globalStyle('[cmdk-input]', {
  position: 'relative',
  fontFamily: typography.font.sans,
  fontSize: typography.fontSize.md,
  width: '100%',
  padding: typography.spacing.md,
  paddingInlineEnd: calc.add(calc.multiply(typography.spacing.md, 2), '45px'),
  borderBottom: `1px solid ${theme.color.border}`,
});

globalStyle('[cmdk-input]::placeholder', {
  color: theme.color.foregroundNeutral,
});

globalStyle('[cmdk-list]', {
  height: 'min(300px, calc(var(--cmdk-list-height)) + 32px)',
  maxHeight: 400,
  overflow: 'auto',
  overscrollBehavior: 'contain',
  transition: '100ms ease',
  transitionProperty: 'height',
  paddingBlock: typography.spacing.md,
  scrollPaddingBlock: typography.spacing.md,
});

globalStyle('*:not([hidden]) + [cmdk-group]', {
  marginBlockStart: typography.spacing.md,
});

globalStyle('[cmdk-group-heading]', {
  position: 'relative',
  userSelect: 'none',
  fontSize: typography.fontSize.xs,
  color: theme.color.foregroundNeutral,
  paddingInline: typography.spacing.md,
  marginBlockEnd: typography.spacing.sm,
  zIndex: 10,
});

globalStyle('[cmdk-item]', {
  display: 'flex',
  alignItems: 'center',
  gap: typography.spacing.sm,
  position: 'relative',
  cursor: 'pointer',
  fontSize: typography.fontSize.sm,
  paddingInline: typography.spacing.md,
  paddingBlock: typography.spacing.sm,
});

globalStyle('[cmdk-item] .content', {
  display: 'flex',
  alignItems: 'center',
  gap: typography.spacing.sm,
  position: 'relative',
  zIndex: 10,
});

globalStyle('[cmdk-item] .highlight', {
  position: 'absolute',
  inset: `0 ${typography.spacing.sm}`,
  borderRadius: typography.radius.md,
  backgroundColor: theme.color.surfaceHover,
});

globalStyle('[cmdk-item] svg', {
  width: '.9rem',
  color: theme.color.foregroundNeutral,
  transition: 'ease-in-out 0.1s',
  transitionDelay: '0.1s',
});

globalStyle("[cmdk-item][aria-selected='true'] svg", {
  color: theme.color.foreground,
});

globalStyle('[cmdk-empty]', {
  textAlign: 'center',
  color: theme.color.foregroundNeutral,
  fontSize: typography.fontSize.sm,
});
