import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const outer = style({
  margin: '2rem 0rem 0rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
});

export const date = style({
  width: '6rem',
  flexShrink: 0,
  padding: '1rem',
  fontSize: variables.fontSize.sm,
  fontWeight: variables.fontWeight.normal,
  color: variables.color.foregroundNeutral,
  textAlign: 'right',
});

export const container = style({
  width: '100%',
  borderRadius: '8px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  border: `1px solid ${variables.color.spotifyBgColor}`,
  position: 'relative',
  display: 'block',
  overflow: 'hidden',
  transition: 'background-color -.15s ease, border 0.15s ease',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: variables.color.borderNeutral,
    border: `1px solid ${variables.color.surfaceFaint}`,
    transition: 'background-color 0.15s ease, border 0.15s ease',
  },
});

export const image = style({
  borderRadius: '6px 6px 0px 0px',
});

export const stack = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '1rem',
});

export const row = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const tileTitle = style({
  letterSpacing: '0.1px',
  lineHeight: '1.1',
  transition: 'color 0.25s ease',
  marginBottom: variables.spacing.sm,
});

export const tileContent = style({
  marginTop: '0.25rem',
  fontSize: variables.fontSize.md,
  lineHeight: '1.4',
  transition: 'color 0.25s ease',
});

export const type = style({
  marginTop: '0.5rem',
  fontSize: variables.fontSize.sm,
});

export const links = style({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '1rem',
});
