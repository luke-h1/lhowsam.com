import { sprinkles, Sprinkles } from '@frontend/styles/sprinkles.css';
import classNames from 'classnames';
import { createElement } from 'react';

interface Props {
  width?: Sprinkles['width'];
  height?: Sprinkles['height'];
}

const Spacer = ({ height, width }: Props) => {
  return createElement('span', {
    className: classNames(
      sprinkles({
        display: 'block',
        width,
        height,
      }),
    ),
  });
};
export default Spacer;
