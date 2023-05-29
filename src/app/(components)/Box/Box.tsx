import type { Sprinkles } from '@frontend/styles/sprinkles.css';
import { sprinkles } from '@frontend/styles/sprinkles.css';
import classNames from 'classnames';
import { AllHTMLAttributes, createElement, ElementType } from 'react';

export interface BoxProps
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
  ...restProps
}: BoxProps) => {
  const atomClasses = classNames(
    sprinkles({
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
  return createElement(component, {
    className: atomClasses,
    ...restProps,
  });
};

export default Box;
