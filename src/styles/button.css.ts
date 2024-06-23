import { style } from '@vanilla-extract/css';
import { variables } from './variables.css';

export const button = style({
  height: '2.075rem',
  padding: '0.5rem 0.75rem 0.5rem 0.5rem',
  backgroundColor: 'transparent',
  border: 'none',
  transition: 'background-color 0.15s ease',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: variables.fontSize.md,
  flexShrink: 0,
  ':hover': {
    backgroundColor: variables.color.gray,
  },
});

export const iconButtonText = style({
  marginLeft: '0.375rem',
  fontSize: variables.fontSize.md,
  color: variables.color.gray,
  transition: 'color 0.15s ease',
});

export const buttonText = style({
  fontSize: variables.fontSize.md,
  color: variables.color.gray,
  transition: 'color 0.15s ease',
});

export const buttonGroup = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.5rem',
});

export const singleButton = style({
  border: `1px solid ${variables.color.gray}`,
  padding: '0.5rem 0.75rem',
  borderRadius: '5px',
  transition:
    'border 0.15s ease, background-color 0.15s ease, color 0.15s ease',
});

export const secondaryButton = style({
  backgroundColor: variables.color.linkContainerBgHover,
  border: `1px solid ${variables.color.gray}`,
  padding: '0.5rem 0.75rem',
  borderRadius: '5px',
  transition:
    'border 0.15s ease, background-color 0.15s ease, color 0.15s ease',
  fontWeight: 480,
  color: variables.color.gray,
  fontSize: variables.fontSize.md,
  ':hover': {
    backgroundColor: variables.color.linkContainerBorderHover,
  },
});

export const primaryButton = style({
  // backgroundColor: variables.color.gray,
  color: variables.color.text,
  padding: '0.5rem 0.75rem',
  borderRadius: '5px',
  transition: 'opacity 0.15s ease',
  fontWeight: 480,
  fontSize: variables.fontSize.md,
  ':hover': {
    opacity: 0.85,
    backgroundColor: variables.color.gray,
  },
});
