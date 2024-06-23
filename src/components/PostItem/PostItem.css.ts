import { variables } from '@frontend/styles/variables.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const item = style({
  backgroundColor: variables.color.linkContainerBg,
  border: `1px solid ${variables.color.linkContainerBorder}`,
  borderRadius: variables.radius.md,
  width: '100%',
  margin: '0.5rem 0rem 0rem',
  transition: 'background-color 0.15s ease, border 0.15s ease',
  overflow: 'hidden',
  ':hover': {
    backgroundColor: variables.color.linkContainerBorderHover,
    cursor: 'pointer',
  },
});

export const container = style({
  padding: '1rem 1rem 1rem 1.25rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',

  ':hover': {
    backgroundColor: variables.color.linkContainerBgHover,
    cursor: 'pointer',
  },

  '@media': {
    '(max-width: 700px)': {
      padding: '1rem 3rem 1rem 1.25rem',
    },
  },
});

export const tileTitle = style({
  fontSize: variables.fontSize.lg,
  fontWeight: 390,
  color: variables.color.gray,
  transition: 'all 0.2s ease',
});

export const stack = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  padding: '0px',
  marginRight: '1rem',
  minWidth: 0,
  '@media': {
    '(max-width: 700px)': {
      width: '100%',
      marginBottom: '0.5rem',
    },
  },
});

export const type = style({
  marginTop: '0.5rem',
  fontSize: '13px',
  fontWeight: 500,
  color: variables.color.gray,
});

export const outer = style({
  margin: '1rem 0rem 0rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  marginLeft: '-6rem',
});

export const date = style({
  width: '6rem',
  flexShrink: 0,
  padding: '1rem',
  fontSize: '12px',
  fontWeight: 390,
  color: variables.color.gray,
  textAlign: 'right',
});

export const url = style({
  margin: '0.35rem 0rem 0rem',
  fontSize: variables.fontSize.sm,
  fontWeight: 390,
  color: variables.color.gray,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  '@media': {
    '(max-width: 700px)': {
      width: '100%',
      maxWidth: '100%',
    },
  },
});

export const dateSub = style({
  marginTop: '0.25rem',
  fontSize: variables.fontSize.sm,
  fontWeight: 390,
  color: variables.color.gray,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  // maxWidth: '40%'
});

export const sub = style({ width: '100%', overflow: 'hidden' });

export const icon = style({
  borderRadius: '4px',
  width: '20px',
  height: '20px',
  flexShrink: 0,
  overflow: 'hidden',
});

export const iconSmall = style({
  borderRadius: '3px',
  marginTop: '0px',
  display: 'flex',
  alignItems: 'center',
  width: '12px',
  height: '12px',
  padding: '0px',
  flexShrink: 0,
  overflow: 'hidden',
  marginRight: '6px',
});

export const right = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  overflow: 'hidden',
  flexGrow: 1,
  marginLeft: '1.125rem',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  '@media': {
    '(max-width: 700px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
});

export const heart = style({
  position: 'absolute',
  right: '20px',
  top: '0px',
});

export const inline = style({ display: 'inline' });

globalStyle('.container .externalIcon', {
  opacity: 0,
  transition: 'opacity 0.2s ease, color 0.2s ease',
});

globalStyle('.container:hover .externalIcon', {
  opacity: 1,
});

export const externalIcon = style({
  fontSize: '15px',
  marginLeft: '3px',
  fontWeight: 300,
});

export const notable = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0remm 1rem 0rem 1rem',
  borderTop: `1px solid ${variables.color.linkContainerBorder}`,
  justifyContent: 'space-between',
});

globalStyle('.notable p', {
  marginTop: '0rem',
});

export const notableLabel = style({
  fontSize: variables.fontSize.sm,
  color: variables.color.gray,
  marginRight: '0.75rem',
  flexShrink: 0,
});

export const title = style({
  fontWeight: 390,
  letterSpacing: '0.1px',
  lineHeight: 1.1,
  fontSize: variables.fontSize.lg,
  color: variables.color.gray,
  transition: 'color 0.25s ease',
});
