export const fontWeights = {
  extraBold: 900,
  bold: 700,
  regular: 400,
  light: 300,
} as const;

export const fontSizes = {
  xxl: '2.5rem',
  xl: '2rem',
  lg: '1.6rem',
  md: '1rem',
  sm: '0.8rem',
  xs: '0.6rem',
} as const;

export const breakpoints = {
  xxl: '1440px',
  xl: '1280px',
  lg: '1024px',
  md: '768px',
  sm: '640px',
  xs: '480px',
  xxs: '260px',
} as const;

export const colors = {} as const; // TODO: move colors to here (from :root)

export const borderRadius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
} as const;

export const spacing = {
  0: '0',
  1: '0.2rem',
  2: '0.4rem',
  3: '0.6rem',
  4: '0.8rem',
  5: '1rem',
  6: '1.2rem',
  7: '1.4rem',
  8: '1.6rem',
  9: '1.8rem',
  10: '2rem',
} as const;
