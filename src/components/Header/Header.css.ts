import { variables } from '@frontend/styles/variables.css';
import { style, globalStyle } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'left',
  padding: '1rem 2rem',
  maxInlineSize: variables.contentWidth.header,
  marginBottom: variables.spacing.xl,
  borderTop: `0.75px solid ${variables.color.border}`,
  borderBottom: `0.75px solid ${variables.color.border}`,
});

export const logoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const navbarDesktop = style({
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',
});

export const connectDesktop = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const toggle = style({
  display: 'none',
  background: 'none',
  border: 'none',
  fontSize: '2rem',
  cursor: 'pointer',
});

export const panelOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

export const panelContent = style({
  position: 'fixed',
  top: 0,
  right: 0,
  width: '80%',
  maxWidth: '300px',
  background: variables.color.border,
  height: '100%',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
});

export const panelClose = style({
  background: 'none',
  border: 'none',
  fontSize: '2rem',
  cursor: 'pointer',
  alignSelf: 'flex-end',
});

globalStyle('@media (max-width: 768px)', {
  [`.${navbarDesktop}`]: {
    display: 'none',
  },
  [`.${connectDesktop}`]: {
    display: 'none',
  },
  [`.${toggle}`]: {
    display: 'block',
  },
});

export const activeLink = style({
  paddingBottom: '1px',
  borderBottom: `1.75px solid ${variables.color.surfaceHighContrast}`,
});
