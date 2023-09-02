import { Sprinkles, sprinkles } from '@frontend/styles/sprinkles.css';
import clsx from 'clsx';
import { createElement, AllHTMLAttributes, ElementType } from 'react';

interface BoxProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      'content' | 'height' | 'translate' | 'color' | 'width' | 'cursor'
    >,
    Sprinkles {
  component?: ElementType;
}

const Box = ({
  as: component = 'div',
  className,
  position,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  marginTop,
  marginX,
  marginY,
  marginBottom,
  display,
  flexDirection,
  flexShrink,
  flexGrow,
  alignItems,
  justifyContent,
  placeItems,
  gap,
  columnGap,
  rowGap,
  columns,
  gridTemplateColumns,
  maxWidth,
  textAlign,
  color,
  ...rest
}: BoxProps) => {
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
      marginX,
      marginY,
      marginBottom,
      display,
      flexDirection,
      flexShrink,
      flexGrow,
      alignItems,
      justifyContent,
      placeItems,
      gap,
      columnGap,
      rowGap,
      columns,
      gridTemplateColumns,
      maxWidth,
      textAlign,
      color,
    }),
    className,
  );
  return createElement(component, { className: atomClasses, ...rest });
};

export default Box;
