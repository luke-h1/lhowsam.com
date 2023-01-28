import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #6e7681',
  borderRadius: '8px',
  padding: '10px',
});

export const heading = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '10px',
});

globalStyle(`${heading} & h2`, {
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.2rem',
  fontWeight: 600,
  columnGap: '10px',
  margin: 0,
  padding: 0,
});

globalStyle(`${heading} & span`, {
  fontSize: '0.8rem',
  color: '#ccc',
});

export const buttonLink = style({
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  columnGap: '5px',
  padding: '3px 10px',
  backgroundColor: '#6e7681',
  borderRadius: '5px',
  border: '1px solid #6e7681',
  textDecoration: 'none',
  color: '#fff',
  // fontSize
  fontWeight: 400,
  whiteSpace: 'nowrap',
  userSelect: 'none',
  //   selectors: {
  //     '&:hover': {},
  //     '&[data-active="true"]': {
  //       // background-color: var(--background-btn-link-active);
  //       // border-color: var(--border-color-hover);
  //     },
  //   },
});

export const links = style({
  display: 'flex',
  marginTop: 'auto',
  columnGap: '5px',
});
