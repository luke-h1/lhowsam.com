import { style } from '@vanilla-extract/css';

export const ImageTransition = style({
  transition: 'all 700ms ease-in-out',
});

export const ImageLoading = style({
  filter: 'blur(48px)',
  transform: 'scale(1.1)',
});

export const ImageLoaded = style({
  filter: 'blur(0)',
  transform: 'scale(1)',
});
