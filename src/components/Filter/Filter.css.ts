import { style } from '@vanilla-extract/css';

export const tabBar = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'nowrap',
  position: 'sticky',
  top: '-32px',
  height: '43px',
  zIndex: 2,
  transition: 'background-color 0.2s ease',
  boxSizing: 'border-box',
  marginBottom: '1.5rem',
});

export const tabRow = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'nowrap',
  overflow: 'scroll',
});

export const tab = style({
  padding: '14px 0px 10px 0px',
  position: 'static',
  height: '44px',
  boxSizing: 'border-box',
  transition: 'all 0.1s ease',
  lineHeight: 1,
  background: 'transparent',
  border: 'none',
  borderBottom: 'solid 3px transparent',
  minWidth: '1.75rem',
  marginRight: '0.875rem',
  flexShrink: 0,
});
