import { Sprinkles, sprinkles } from '@frontend/styles/sprinkles.css';
import { PolymorphicComponentProps } from '@frontend/types/style';
import clsx from 'clsx';
import { createElement } from 'react';
import * as styles from './Heading.css';

export type HeadingProps<C extends React.ElementType> =
  PolymorphicComponentProps<
    C,
    {
      as?: 'h1' | 'h2' | 'h3' | 'h4';
      fontSize?: Sprinkles['fontSize'];
      color?: Sprinkles['color'];
      children: React.ReactNode;
    }
  >;

export const Heading = <C extends React.ElementType = 'p'>({
  as,
  fontSize = 'md',
  color = 'foreground',
  ...props
}: HeadingProps<C>) => {
  const component = as || 'h2';
  const { className, ...restProps } = props;
  return createElement(component, {
    className: clsx(styles.root, sprinkles({ fontSize, color }), className),
    ...restProps,
  });
};
