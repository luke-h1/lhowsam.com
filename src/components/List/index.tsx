import { Sprinkles, sprinkles } from '@frontend/styles/sprinkles.css';
import { PolymorphicComponentProps } from '@frontend/types/style';
import clsx from 'clsx';
import { ElementType, ReactNode, createElement } from 'react';
import * as styles from './List.css';

type ListProps<T extends ElementType> = PolymorphicComponentProps<T, Sprinkles>;

const List = <T extends ElementType = 'ul'>({
  as,
  position,
  className,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,
  display,
  flexDirection,
  alignItems,
  justifyContent,
  placeItems,
  flexShrink,
  flexGrow,
  gap,
  columnGap,
  rowGap,
  columns,
  gridTemplateColumns,
  width,
  maxWidth,
  height,
  aspectRatio,
  textAlign,
  ...rest
}: ListProps<T>) => {
  const atomClasses = clsx(
    sprinkles({
      position,
      padding,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      paddingX,
      paddingY,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      marginX,
      marginY,
      display,
      flexDirection,
      alignItems,
      justifyContent,
      placeItems,
      flexShrink,
      flexGrow,
      gap,
      columnGap,
      rowGap,
      columns,
      gridTemplateColumns,
      width,
      maxWidth,
      height,
      aspectRatio,
      textAlign,
    }),
    className,
  );
  const component = as || 'ul';
  return createElement(component, { className: atomClasses, ...rest });
};

const Item = ({ children }: { children: ReactNode }) => {
  return <li className={styles.item}>{children}</li>;
};

List.Item = Item;

export { List };
