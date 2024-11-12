import { sprinkles, Sprinkles } from '@frontend/styles/sprinkles.css';
import { PolymorphicComponentProps } from '@frontend/types/style';
import clsx from 'clsx';
import { createElement, ElementType } from 'react';
import * as styles from './Heading.css';

type HeadingProps<TElement extends React.ElementType> =
  PolymorphicComponentProps<
    TElement,
    {
      as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
      fontSize?: Sprinkles['fontSize'];
      color?: Extract<Sprinkles['color'], 'foreground' | 'foregroundNeutral'>;
      children: React.ReactNode;
      testId?: string;
    }
  >;

export default function Heading<TElement extends ElementType = 'p'>({
  as,
  fontSize = 'md',
  color = 'foreground',
  testId,
  ...rest
}: HeadingProps<TElement>) {
  const component = as || 'h2';

  return createElement(component, {
    className: clsx(
      styles.root,
      styles.tracking[component],
      sprinkles({
        fontSize,
        color,
      }),
    ),
    'data-testid': testId,
    ...rest,
  });
}
