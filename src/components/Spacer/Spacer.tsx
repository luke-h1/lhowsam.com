import { Sprinkles, sprinkles } from '@frontend/styles/sprinkles.css';
import clsx from 'clsx';
import { createElement } from 'react';

interface SpacerProps {
  width?: Sprinkles['width'];
  height?: Sprinkles['height'];
}

const Spacer = ({ width, height }: SpacerProps) => {
  return createElement('span', {
    'aria-hidden': '',
    className: clsx(sprinkles({ display: 'block', width, height })),
  });
};

export default Spacer;
