import { Sprinkles, sprinkles } from '@frontend/styles/sprinkles.css';
import { PolymorphicComponentProps } from '@frontend/types/style';
import clsx from 'clsx';
import { ElementType, ReactNode, createElement } from 'react';
import * as styles from './Heading.css';

type HeadingProps<T extends ElementType> = PolymorphicComponentProps<
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
  ...rest
}: HeadingProps<T>) => {
  const component = as || 'h2';
  return createElement(component, {
    className: clsx(
      styles.root,
      styles.tracking[component],
      sprinkles({ fontSize, color }),
    ),
    ...rest,
  });
};
export default Heading;
