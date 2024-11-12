import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from './sprinkles.css';

export const stack = recipe({
  base: [sprinkles({ display: 'grid' })],
  variants: {
    align: {
      start: sprinkles({ alignItems: 'start' }),
      center: sprinkles({ alignItems: 'center' }),
      end: sprinkles({ alignItems: 'end' }),
    },
    justify: {
      left: sprinkles({ justifyContent: 'flex-start' }),
      center: sprinkles({ justifyContent: 'center' }),
      right: sprinkles({ justifyContent: 'flex-end' }),
    },
    orientation: {
      vertical: {
        gridTemplateColumns: '1fr',
      },
      horizontal: {
        gridTemplateRows: '1fr',
        gridAutoFlow: 'column',
      },
    },
    inline: {
      true: sprinkles({ display: 'inline-grid' }),
      false: sprinkles({ width: 'xxxxl' }),
    },
  },
});
