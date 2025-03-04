import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { variables } from './variables.css';

const box = defineProperties({
  properties: {
    position: ['relative', 'absolute', 'fixed', 'sticky'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    flexGrow: [0, 1, 2, 3, 4, 5],
    flexShrink: [0],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-between',
    ],
    overflow: ['hidden'],
    visibility: ['visible', 'hidden'],
    borderRadius: variables.radii,
    borderWidth: variables.borderWidth,
  },
});

const responsiveProperties = defineProperties({
  defaultCondition: 'initial',
  conditions: {
    initial: {},
    sm: { '@media': 'screen and (min-width: 576px)' },
    md: { '@media': 'screen and (min-width: 768px)' },
    lg: { '@media': 'screen and (min-width: 1024px)' },
  },
  properties: {
    display: ['none', 'block', 'inline-block', 'flex', 'inline-flex'],
  },
});

export default createSprinkles(box, responsiveProperties);
