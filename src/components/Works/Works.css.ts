import { style } from '@vanilla-extract/css';

export const scrollAreaRoot = style({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
});

export const scrollAreaViewport = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
});

export const horizontalList = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',
  padding: '1rem',
});

export const listItem = style({
  display: 'inline-block',
  minWidth: '220px',
});

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'left',
  padding: '1rem',
  borderRadius: '8px',
});

export const imageContainer = style({
  position: 'relative',
  width: '220px',
  height: '275px',
  marginBottom: '1rem',
  borderRadius: '8px',
  overflow: 'hidden',
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  filter: 'brightness(0.8)',
});

export const title = style({
  fontSize: '1rem',
  fontWeight: 'bold',
  marginTop: '0.5rem',
});

export const scrollAreaScrollbar = style({
  display: 'flex',
  userSelect: 'none',
  touchAction: 'none',
  padding: '2px',
  background: 'rgba(0,0,0,0.1)',
  transition: 'background 160ms ease-out',
  ':hover': {
    background: 'rgba(0,0,0,0.2)',
  },
});

export const scrollAreaThumb = style({
  flex: 1,
  background: 'rgba(0,0,0,0.5)',
  borderRadius: '10px',
  position: 'relative',
  '::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    minWidth: '44px',
    minHeight: '44px',
    transform: 'translate(-50%, -50%)',
  },
});
