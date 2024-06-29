import { Sprinkles, sprinkles } from '@frontend/styles/sprinkles.css';
import { PolymorphicComponentProps } from '@frontend/types/style';
import clsx from 'clsx';
import React from 'react';
import * as styles from './Text.css';

export type TextProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  {
    as?: 'p' | 'span' | 'strong' | 'em' | 'time' | 'figcaption' | 'label';
    fontSize?: Sprinkles['fontSize'];
    fontFamily?: Sprinkles['fontFamily'];
    color?: Extract<
      Sprinkles['color'],
      'foreground' | 'foregroundNeutral' | 'highlight'
    >;
    letterSpacing?: Sprinkles['letterSpacing'];
    textTransform?: Sprinkles['textTransform'];
    children: React.ReactNode;
  }
>;

export const Text = <C extends React.ElementType = 'p'>({
  as,
  fontSize = 'md',
  fontFamily = 'sans',
  letterSpacing,
  textTransform,
  color = 'foreground',
  ...props
}: TextProps<C>) => {
  const component = as || 'p';
  const { className, ...restProps } = props;
  return React.createElement(component, {
    className: clsx(
      styles.root,
      sprinkles({ fontSize, fontFamily, letterSpacing, textTransform, color }),
      className,
    ),
    ...restProps,
  });
};
