import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  // paddingLeft: variables.spacing.md,
  paddingLeft: variables.spacing.xs,
  borderTop: '2px solid',
  borderBottom: '1px solid',
  borderColor: variables.color.borderNeutral,
});

export const nav = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: variables.spacing.md,
  maxWidth: variables.maxWidth.md,
  marginRight: 'auto',
  marginLeft: 'auto',
});

export const group = style({
  display: 'flex',
  gap: variables.spacing.md,
});

export const groupEnd = style({
  display: 'flex',
  gap: variables.spacing.md,
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  marginLeft: 'auto',
  marginBlockStart: variables.spacing.md,
});

export const anchor = style({
  position: 'relative',
  display: 'grid',
  placeItems: 'center',
  paddingTop: variables.spacing.md,
  paddingBottom: variables.spacing.md,
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

export const highlight = style({
  position: 'absolute',
  top: -4,
  left: 0,
  width: '100%',
  height: 4,
  backgroundColor: variables.color.highlight,
});
