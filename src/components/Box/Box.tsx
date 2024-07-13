import { Sprinkles, sprinkles } from '@frontend/styles/sprinkles.css';
import { PolymorphicComponentProps } from '@frontend/types/style';
import clsx from 'clsx';
import { ElementType, createElement } from 'react';

export type BoxProps<T extends ElementType> = PolymorphicComponentProps<
  T,
  Sprinkles
>;

const Box = <T extends ElementType = 'div'>({
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
}: BoxProps<T>) => {
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
  const component = as || 'div';
  return createElement(component, { className: atomClasses, ...rest });
};
export default Box;
