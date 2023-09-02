import { PolymorphicComponentProps } from '@frontend/types/style';
import { ElementType, ReactNode, createElement } from 'react';
import * as styles from './VisuallyHidden.css';

type VisuallyHiddenProps<T extends ElementType> = PolymorphicComponentProps<
  T,
  {
    as?: keyof JSX.IntrinsicElements;
    children: ReactNode;
  }
>;

const VisuallyHidden = <T extends ElementType = 'span'>({
  as,
  ...rest
}: VisuallyHiddenProps<T>) => {
  const component = as || 'span';
  return createElement(component, {
    className: styles.root,
    ...rest,
  });
};
export default VisuallyHidden;
