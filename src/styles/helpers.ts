import { css } from '@emotion/css';
import { fontSizes, fontWeights } from './typography';

export const width = {
  full: css`
    width: 100%;
  `,
  threeQuarters: css`
    width: 75%;
  `,
  half: css`
    width: 50%;
  `,
  quarter: css`
    width: 25%;
  `,
};

export const height = {
  full: css`
    height: 100%;
  `,
  threeQuarters: css`
    height: 75%;
  `,
  half: css`
    height: 50%;
  `,
  quarter: css`
    height: 25%;
  `,
};

export const heading = {
  xs: css`
    font-size: ${fontSizes.xs};
  `,
  sm: css`
    font-size: ${fontSizes.sm};
  `,
  md: css`
    font-size: ${fontSizes.md};
  `,
  lg: css`
    font-size: ${fontSizes.lg};
  `,
  xl: css`
    font-size: ${fontSizes.xl};
  `,
};

export const text = {
  left: css`
    text-align: left;
  `,
  right: css`
    text-align: right;
  `,
  center: css`
    text-align: center;
  `,

  lowercase: css`
    text-transform: lowercase;
  `,
  uppercase: css`
    text-transform: uppercase;
  `,

  light: css`
    font-weight: ${fontWeights.light};
  `,
  regular: css`
    font-weight: ${fontWeights.regular};
  `,
  bold: css`
    font-weight: ${fontWeights.bold};
  `,
  extraBold: css`
    font-weight: ${fontWeights.extraBold};
  `,
};
export const flex = {
  flex: css`
    display: flex;
  `,
  centerAll: css`
    align-items: center;
    display: flex;
    justify-content: center;
  `,

  column: css`
    flex-direction: column;
  `,
  row: css`
    flex-direction: row;
  `,
  rowReverse: css`
    flex-direction: row-reverse;
  `,
  columnReverse: css`
    flex-direction: column-reverse;
  `,
  alignItemsStart: css`
    align-items: flex-start;
  `,
  alignItemsCenter: css`
    align-items: center;
  `,
  alignItemsEnd: css`
    align-items: flex-end;
  `,
  wrap: css`
    flex-wrap: wrap;
  `,
  justifyStart: css`
    justify-content: flex-start;
  `,
  justifyCenter: css`
    justify-content: center;
  `,
  justifyEnd: css`
    justify-content: flex-end;
  `,
  justifySpaceBetween: css`
    justify-content: space-between;
  `,
};
