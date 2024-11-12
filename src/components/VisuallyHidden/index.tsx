import { PolymorphicComponentProps } from '@frontend/types/style';
import { createElement, ElementType, ReactNode } from 'react';
import * as styles from './VisuallyHidden.css';

type VisuallyHiddenProps<TElement extends ElementType> =
  PolymorphicComponentProps<
    TElement,
    {
      as?: TElement;
      children: ReactNode;
    }
  >;

export default function VisuallyHidden<TElement extends ElementType = 'span'>({
  as,
  ...rest
}: VisuallyHiddenProps<TElement>) {
  const component = as || 'span';
  return createElement(component, {
    className: styles.root,
    id: 'visually-hidden',
    ...rest,
  });
}
