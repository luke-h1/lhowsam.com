import { Sprinkles, sprinkles } from '@frontend/styles/sprinkles.css';
import { PolymorphicComponentProps } from '@frontend/types/style';
import clsx from 'clsx';
import { ElementType, ReactNode, createElement } from 'react';
import * as styles from './Heading.css';

export type HeadingProps<TElement extends ElementType> =
  PolymorphicComponentProps<
    TElement,
    {
      as?: 'h1' | 'h2' | 'h3' | 'h4';
      fontSize?: Sprinkles['fontSize'];
      color?: Sprinkles['color'];
      children: ReactNode;
    }
  >;

export const Heading = <TElement extends ElementType = 'p'>({
  as,
  fontSize = 'md',
  color = 'foreground',
  ...props
}: HeadingProps<TElement>) => {
  const component = as || 'h2';
  const { className, ...restProps } = props;
  return createElement(component, {
    className: clsx(styles.root, sprinkles({ fontSize, color }), className),
    ...restProps,
  });
};
