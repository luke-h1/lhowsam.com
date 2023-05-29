import { sprinkles, Sprinkles } from '@frontend/styles/sprinkles.css';
import classNames from 'classnames';
import { createElement, CSSProperties } from 'react';

interface Props {
  width?: Sprinkles['width'];
  height?: Sprinkles['height'];
  style?: CSSProperties;
}

const Spacer = ({ height, width, style }: Props) => {
  return createElement('span', {
    className: classNames(
      sprinkles({
        display: 'block',
        width,
        height,
      }),
    ),
    style,
  });
};
export default Spacer;
