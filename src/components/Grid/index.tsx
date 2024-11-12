import { sprinkles, Sprinkles } from '@frontend/styles/sprinkles.css';
import clsx from 'clsx';
import { ReactNode } from 'react';
import * as styles from './Grid.css';

interface ContainerProps {
  children: ReactNode;
  colGap?: Sprinkles['columnGap'];
  rowGap?: Sprinkles['rowGap'];
  alignItems?: Sprinkles['alignItems'];
}

export function Container({
  children,
  alignItems,
  colGap = 'xxxl',
  rowGap = 'none',
}: ContainerProps) {
  return (
    <div
      className={clsx(
        styles.container,
        sprinkles({ columnGap: colGap, rowGap, alignItems }),
      )}
    >
      {children}
    </div>
  );
}

interface ColumnProps {
  children: ReactNode;
  className?: string;
  colStart?: Sprinkles['gridColumnStart'];
  colEnd?: Sprinkles['gridColumnEnd'];
  rowStart?: Sprinkles['gridRowStart'];
  rowEnd?: Sprinkles['gridRowEnd'];
}

export function Column({
  children,
  className,
  colEnd,
  colStart,
  rowEnd,
  rowStart,
}: ColumnProps) {
  return (
    <div
      className={clsx(
        sprinkles({
          gridColumnStart: colStart,
          gridColumnEnd: colEnd,
          gridRowStart: rowStart,
          gridRowEnd: rowEnd,
        }),
        className,
      )}
    >
      {children}
    </div>
  );
}
