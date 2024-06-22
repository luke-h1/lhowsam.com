import { variables } from '@frontend/styles/variables.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  padding: '1.125rem 1.25rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: variables.color.linkContainerBg,
  borderRadius: '8px',
});

globalStyle('.container .externalIcon', {
  opacity: 0,
  transition: 'opacity 0.1s ease',
});

globalStyle('.container:hover .externalIcon', {
  opacity: 1,
});

export const stack = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const icon = style({
  borderRadius: '6px',
  flexShrink: 0,
});

export const iconContainer = style({
  marginBottom: '6px',
});

export const type = style({
  marginTop: '0.5rem',
  fontSize: '12.6px',
  fontWeight: 500,
  color: variables.color.gray,
});

export const tileContent = style({
  marginTop: '0.25rem',
  fontSize: variables.fontSize.md,
  color: variables.color.gray,
  display: '-webkit-inline-block',
  overflow: 'hidden',
  marginBottom: '0.5rem',
  WebkitLineClamp: 3,
  lineHeight: 1.3,
  transition: 'color 0.25s ease',
});

export const date = style({
  width: '6rem',
  flexShrink: 0,
  fontSize: variables.fontSize.sm,
  fontWeight: 390,
  color: variables.color.gray,
  '@media': {
    '(max-width: 700px)': {
      width: '100%',
      textAlign: 'left',
      marginTop: '0.5rem',
    },
  },
});

export const externalIcon = style({
  fontSize: '15px',
  marginLeft: '3px',
  fontWeight: 300,
});

export const titleLink = style({
  transition: 'background-color 0.15s ease',
  ':hover': {
    borderRadius: '4px',
    backgroundColor: variables.color.gray,
    padding: '2px 5px 2px 5px',
    margin: '-2px -5px -2px -5px',
  },
});

export const tileTitle = style({
  fontWeight: 390,
  letterSpacing: '0.1px',
  lineHeight: 1.1,
  fontSize: variables.fontSize.lg,
  color: variables.color.gray,
  transition: 'color 0.25s ease',
});
