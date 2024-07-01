import {
  defineProperties,
  createSprinkles,
  createMapValueFn,
} from '@vanilla-extract/sprinkles';
import { tokens } from './tokens.css';
import { variables } from './variables.css';

const space = tokens.spacing;
export type Space = keyof typeof space;

const { maxWidth } = tokens;
export type MaxWidth = keyof typeof maxWidth;

const { fontSize } = tokens;
export type FontSize = keyof typeof fontSize;

const { letterSpacing } = tokens;
export type LetterSpacing = keyof typeof letterSpacing;

const { color } = variables;
export type Color = keyof typeof color;

const { fontFamily } = tokens;
export type FontFamily = keyof typeof fontFamily;

const width = {
  ...space,
  '1/1': '100%',
  '4/3': '75%',
  '2/3': '66.66666667%',
  '1/2': '50%',
  '1/3': '33.33333333%',
  '1/4': '25%',
} as const;

const columns = {
  '1/1': 'repeat(1, 1fr)',
  '1/2': 'repeat(2, 1fr)',
  '1/3': 'repeat(3, 1fr)',
  '1/4': 'repeat(4, 1fr)',
} as const;

const rows = ['1', '-1'] as const;

const responsiveProperties = defineProperties({
  conditions: {
    xs: {},
    sm: {},
    md: { '@media': 'screen and (min-width: 768px)' },
    lg: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'sm',
  properties: {
    position: ['relative', 'absolute'],
    display: ['none', 'flex', 'inline-flex', 'grid', 'block', 'inline'],
    flexDirection: ['row', 'column', 'row-reverse'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
    placeItems: ['center'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    gap: space,
    columnGap: space,
    rowGap: space,
    gridTemplateColumns: columns,
    width,
    height: space,
    aspectRatio: ['1/1', '4/3', '16/9'],
    fontSize,
    maxWidth,
    float: ['none', 'right', 'left'],
    textAlign: ['center', 'right', 'left'],
    gridColumnStart: columns,
    gridColumnEnd: columns,
    gridRowStart: rows,
    gridRowEnd: rows,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
    columns: ['gridTemplateColumns'],
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    fontFamily,
    color,
    textTransform: ['none', 'uppercase'],
    letterSpacing,
    flexShrink: [0],
    flexGrow: [1],
  },
});

export const mapResponsiveValue = createMapValueFn(responsiveProperties);

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
