import { sprinkles, Sprinkles } from '@frontend/styles/sprinkles.css';
import { PolymorphicComponentProps } from '@frontend/types/style';
import classNames from 'classnames';
import { createElement, ElementType } from 'react';
import * as styles from './Text.css';

type Props<T extends ElementType> = PolymorphicComponentProps<
  T,
  {
    as?: 'p' | 'span' | 'strong' | 'em' | 'time';
    fontSize?: Sprinkles['fontSize'];
    fontWeight?: Sprinkles['fontWeight'];
    color?: Extract<
      Sprinkles['color'],
      'foreground' | 'foregroundNeutral' | 'foregroundAction'
    >;
  }
>;

const Text = <T extends ElementType = 'p'>({
  as,
  fontSize = 'md',
  fontWeight = 'normal',
  color = 'foreground',
  ...restProps
}: Props<T>) => {
  const component = as || 'p';

  return createElement(component, {
    className: classNames(
      styles.root,
      sprinkles({ fontSize, fontWeight, color }),
    ),
    ...restProps,
  });
};
export default Text;
