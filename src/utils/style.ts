import { css, FlattenSimpleInterpolation } from 'styled-components';

export const BASE_FONT_SIZE = 18;

export type Breakpoint = keyof typeof BREAKPOINTS;
export const BREAKPOINTS = {
  xs: 320,
  sm: 400,
  md: 768,
  lg: 1060,
  xl: 1440,
};

export const pixelToRem = (fontSize: number) => `${fontSize / BASE_FONT_SIZE}rem`;

export const getIsMobileLayout = () => {
  if (typeof window === 'undefined') return false;

  const root = window.document.documentElement;
  const isMobileLayout = root.style.getPropertyValue('--is-mobile-layout') === 'true';
  return isMobileLayout;
};

const breakpointSides = ['until', 'from'] as const;

type BreakpointSide = typeof breakpointSides[number];

type BreakpointFn = {
  [side in BreakpointSide]: {
    [key in Breakpoint]: (styles: FlattenSimpleInterpolation) => string;
  };
};

export const breakpoint = breakpointSides.reduce(
  (partial, curr) => ({
    ...partial,
    [curr]: Object.entries(BREAKPOINTS).reduce(
      (useBreakpoint, [name, size]) => ({
        ...useBreakpoint,
        [name]: (...styles: FlattenSimpleInterpolation) => {
          return curr === 'until'
            ? css`
                @media (max-width: ${size - 1}px) {
                  ${styles}
                }
              `
            : css`
                @media (min-width: ${size}px) {
                  ${styles}
                }
              `;
        },
      }),
      {} as BreakpointFn,
    ),
  }),
  {} as BreakpointFn,
);
