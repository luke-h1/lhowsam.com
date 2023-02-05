import { sprinkles, Sprinkles } from '@frontend/styles/sprinkles.css';
import { PolymorphicComponentProps } from '@frontend/types/style';
import classNames from 'classnames';
import { createElement, ElementType, ReactNode } from 'react';
import * as styles from './Heading.css';

type Props<T extends ElementType> = PolymorphicComponentProps<
  T,
  {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    fontSize?: Sprinkles['fontSize'];
    color?: Extract<
      Sprinkles['color'],
      'foreground' | 'foregroundNeutral' | 'foregroundAction'
    >;
    children: ReactNode;
  }
>;

const Heading = <T extends ElementType = 'p'>({
  as,
  fontSize = 'md',
  color = 'foreground',
  ...restProps
}: Props<T>) => {
  const component = as || 'h2';

  return createElement(component, {
    className: classNames(
      styles.root,
      styles.tracking[component],
      sprinkles({
        fontSize,
        color,
      }),
    ),
    ...restProps,
  });
};
export default Heading;
