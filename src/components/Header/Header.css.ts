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
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(4px)',
  zIndex: 998,
});

export const panelContent = style({
  position: 'fixed',
  top: 0,
  right: 0,
  width: '85%',
  maxWidth: '360px',
  background: variables.color.page,
  height: '100%',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '-4px 0 24px rgba(0, 0, 0, 0.15)',
  zIndex: 999,
  overflowY: 'auto',
});

export const mobileHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '1rem',
  borderBottom: `1px solid ${variables.color.border}`,
});

export const panelClose = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: variables.radii.md,
  color: variables.color.foregroundNeutral,
  transition: 'background-color 0.2s ease',
  ':hover': {
    backgroundColor: variables.color.surfaceHover,
  },
  ':active': {
    backgroundColor: variables.color.surfaceHover,
  },
});

export const mobileNav = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  flex: 1,
});

export const mobileNavItem = style({
  borderRadius: variables.radii.md,
  transition: 'background-color 0.2s ease',
});

export const mobileNavLink = style({
  display: 'block',
  padding: '1rem',
  textDecoration: 'none',
  borderRadius: variables.radii.md,
  transition: 'all 0.2s ease',
});

export const activeMobileLink = style({
  color: variables.color.surfaceHighContrast,
  background: `linear-gradient(90deg, ${variables.color.highlight}20, transparent)`,
  borderLeft: `3px solid ${variables.color.surfaceHighContrast}`,
  paddingLeft: '0.875rem',
});

export const inactiveMobileLink = style({
  color: variables.color.foregroundNeutral,
  ':hover': {
    color: variables.color.foreground,
  },
});

export const mobileFooter = style({
  borderTop: `1px solid ${variables.color.border}`,
  paddingTop: '1rem',
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
