import { style } from '@vanilla-extract/css';

export const root = style({
  position: 'absolute',
  overflow: 'hidden',
  width: 1,
  height: 1,
  clip: 'rect(1px, 1px, 1px, 1px)',
  whiteSpace: 'nowrap',
});
