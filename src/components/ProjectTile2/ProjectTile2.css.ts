import { variables } from '@frontend/styles/variables.css';
import { globalStyle, keyframes, style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left',
  position: 'relative',
  transition: 'background-color 0.15s ease, border 0.15s ease',
  // border: `2px solid ${variables.color.menuLabel}`,
  padding: '1rem',
  marginRight: '0.75rem',
  ':hover': {
    cursor: 'pointer',
  },
});

export const row = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '0px',
  minWidth: 0,
  gap: '1rem',
  alignItems: 'flex-end',

  '@media': {
    '(max-width: 700px)': {
      alignItems: 'center',
    },
  },
});

export const top = style({
  marginTop: '1.125remm',
  paddingRight: '1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  verticalAlign: 'middle',
  alignItems: 'flex-start',
  '@media': {
    '(max-width: 960px)': {
      marginTop: '1em',
      paddingRight: '0rem',
      marginBottom: '2.5rem',
    },
  },
});

export const col = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '0.75rem',
  verticalAlign: 'middle',
  justifyContent: 'left',
});

export const image = style({
  objectFit: 'cover',
  width: '100%',
  aspectRatio: 1,
  backgroundColor: variables.color.linkContainerBgHover,
  borderRadius: variables.spacing.sm,
});

export const imageInModal = style({
  objectFit: 'cover',
  width: '56%',
  aspectRatio: 1,
  borderRadius: variables.spacing.sm,
  backgroundColor: variables.color.linkContainerBgHover,
  '@media': {
    '(max-width: 960px)': {
      width: '45%',
    },
    '(max-width: 700px)': {
      width: '100%',
    },
  },
});

export const stack = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '0.5rem',
  marginLeft: '1.875remm',

  '@media': {
    '(max-width: 960px)': {
      marginLeft: '0rem',
    },
  },
});

export const price = style({
  color: variables.color.gray,
  fontSize: variables.fontSize.lg,
  fontWeight: 390,
});

export const title = style({
  color: variables.color.gray,
  fontSize: variables.fontSize.sm,
  fontWeight: 390,
});

export const brand = style({
  color: variables.color.gray,
  fontSize: variables.fontSize.sm,
  fontWeight: 390,
  marginTop: '0.125rem',
});

export const disclaimer = style({
  color: variables.color.gray,
  fontSize: variables.fontSize.sm,
  fontWeight: 390,
  opacity: 0.8,
});

export const brandInModal = style({
  color: variables.color.gray,
  fontSize: variables.fontSize.md,
  fontWeight: 390,
});

export const icon = style({
  borderRadius: '3px',
  width: '16px',
  height: '16px',
  flexShrink: 0,
  overflow: 'hidden',
});

export const heart = style({
  position: 'absolute',
  right: '20px',
  top: '0px',
});

globalStyle(`${container} .modalIcon`, {
  opacity: 0,
  transition: 'opacity 0.2s ease, color 0.2s ease',
});

globalStyle(`${container}:hover .modalIcon`, {
  opacity: 0.8,
});

export const externalIcon = style({
  fontSize: '15px',
  marginLeft: '3px',
  fontWeight: '300',
});

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'grid',
  placeItems: 'center',
  overflowY: 'auto',
  backgroundColor: variables.color.overlayDarkness,
  zIndex: 9,
  /* backdrop-filter: blur(2px); */
  /* animation: overlay-show 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards; */
});

export const tileTitle = style({
  fontWeight: 390,
  letterSpacing: '0.1px',
  lineHeight: 1.1,
  fontSize: variables.fontSize.lg,
  color: variables.color.text,
  transition: 'color 0.25s ease',
});

export const content = style({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: variables.color.modalBg,
  color: variables.color.gray,
  boxShadow:
    'rgba(20, 20, 20, 0.15) 0px 10px 38px -10px, rgba(20, 20, 20, 0.05) 0px 10px 20px -15px',
  borderRadius: '1rem',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'clamp(600px, 70vw, 1080px)',
  alignContent: 'stretch',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  zIndex: 10,
  padding: '1.5rem',

  '@media': {
    '(max-width: 700px)': {
      display: 'flex',
      flexDirection: 'column',
      width: '94%',
      padding: '2rem',
    },
  },
});

const overlayShow = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});
const overlayOut = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});
const contentShow = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(0.96)',
  },
  '100%': {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
  },
});
const contentOut = keyframes({
  '0%': {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
  },
  '100%': {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(0.96)',
  },
});

globalStyle('.overlay[data-state="open"]', {
  animation: `${overlayShow} 250ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
});
globalStyle('.overlay[data-state="closed"]', {
  animation: `${overlayOut} 200ms ease-out forwards`,
});
globalStyle('.content[data-state="open"]', {
  animation: `${contentShow} 250ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
});
globalStyle('.content[data-state="closed"]', {
  animation: `${contentOut} 200ms ease-out forwards`,
});

globalStyle('.content h1 h2 h3 p', {
  color: variables.color.gray,
});

export const modalTitle = style({
  fontSize: variables.fontSize.xxl,
  color: variables.color.text,
  fontWeight: '580',
});

export const inline = style({ display: 'inline' });
