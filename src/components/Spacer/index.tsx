import { sprinkles, Sprinkles } from '@frontend/styles/sprinkles.css';
import clsx from 'clsx';
import { createElement } from 'react';

interface Props {
  width?: Sprinkles['height'];
  height?: Sprinkles['width'];
}

export default function Spacer({ height, width }: Props) {
  return createElement('span', {
    'aria-hidden': true,
    className: clsx(
      sprinkles({ display: width ? 'inline-block' : 'block', width, height }),
    ),
  });
}
