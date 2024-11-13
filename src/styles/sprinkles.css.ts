import {
  defineProperties,
  createSprinkles,
  createMapValueFn,
  createNormalizeValueFn,
} from '@vanilla-extract/sprinkles';
import { variables } from './variables.css';

const {
  spacing: space,
  radii: borderRadius,
  fontSize,
  fontWeight,
  font: fontFamily,
  contentWidth: maxWidth,
} = variables;

const columns = ['1', '2', '3', '4', '-1'] as const;
const rows = ['1', '-1'] as const;

const responsiveProperties = defineProperties({
  conditions: {
    xs: {},
    sm: { '@media': 'screen and (min-width: 576px)' },
    md: { '@media': 'screen and (min-width: 768px)' },
    lg: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'xs',
  properties: {
    position: ['relative', 'absolute', 'static'],
    flexDirection: ['row', 'row-reverse', 'column'],
    flexWrap: ['wrap', 'nowrap'],
    display: [
      'block',
      'inline',
      'inline-flex',
      'inline-block',
      'flex',
      'grid',
      'inline-grid',
    ],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: [
      'start',
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'end',
      'stretch',
    ],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginRight: space,
    marginBottom: space,
    marginLeft: space,
    gap: space,
    gridTemplateColumns: columns,
    rowGap: space,
    columnGap: space,
    maxWidth,
    float: ['none', 'right', 'left'],
    width: space,
    height: space,
    fontSize,
    gridColumnStart: columns,
    gridColumnEnd: columns,
    gridRowStart: rows,
    gridRowEnd: rows,
    aspectRatio: ['1/1', '4/3'],
    textAlign: ['left', 'center', 'right'],
    overflow: ['auto'],
  },
  shorthands: {
    columns: ['gridTemplateColumns'],
    placeItems: ['justifyContent', 'alignItems'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginRight', 'marginLeft'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    color: variables.color,
    borderRadius,
    flexShrink: [0],
    textTransform: ['none', 'uppercase'],
    flexGrow: [0, 1],
    fontFamily,
    fontWeight,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];

export const mapResponsiveValue = createMapValueFn(responsiveProperties);
export const normalizeResponsiveValue =
  createNormalizeValueFn(responsiveProperties);
