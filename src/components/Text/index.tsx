import { Sprinkles, sprinkles } from '@frontend/styles/sprinkles.css';
import { PolymorphicComponentProps } from '@frontend/types/style';
import clsx from 'clsx';
import { ElementType, createElement } from 'react';
import * as styles from './Text.css';

type TextProps<T extends ElementType> = PolymorphicComponentProps<
  T,
  {
    as?: 'p' | 'span' | 'strong' | 'em' | 'time';
    fontFamily?: Sprinkles['fontFamily'];
    fontSize?: Sprinkles['fontSize'];
    fontWeight?: Sprinkles['fontWeight'];
    marginBottom?: Sprinkles['marginBottom'];
    color?: Extract<
      Sprinkles['color'],
      'foreground' | 'foregroundNeutral' | 'foregroundAction'
    >;
    textTransform?: Sprinkles['textTransform'];
    gradient?: boolean;
  }
>;

const Text = <TElement extends ElementType = 'p'>({
  as,
  fontFamily,
  fontSize = 'md',
  fontWeight = 'normal',
  color = 'foreground',
  gradient = false,
  ...rest
}: TextProps<TElement>) => {
  const component = as || 'p';
  return createElement(component, {
    className: clsx(
      styles.root,
      {
        [styles.gradient]: gradient,
      },
      sprinkles({
        fontFamily,
        fontSize,
        fontWeight,
        color,
      }),
    ),
    ...rest,
  });
};
export default Text;
