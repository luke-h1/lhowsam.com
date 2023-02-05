import { globalStyle, style } from '@vanilla-extract/css';

export const image = style({
  borderRadius: '13px',
  marginBottom: '30px',
});

export const text = style({
  marginBottom: '30px',
  paddingTop: '30px',
});

globalStyle(`${text} p`, {
  fontWeight: 400,
  fontSize: '17px',
  lineHeight: '27px',
});

globalStyle(`${text} a`, {
  transition: 'color 200ms ease-out',
});
