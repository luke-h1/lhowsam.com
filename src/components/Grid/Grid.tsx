import { Sprinkles, sprinkles } from '@frontend/styles/sprinkles.css';
import clsx from 'clsx';
import { ReactNode } from 'react';
import * as styles from './Grid.css';

interface GridContainerProps {
  children: ReactNode;
  colGap?: Sprinkles['columnGap'];
  rowGap?: Sprinkles['rowGap'];
  alignItems?: Sprinkles['alignItems'];
}

const Container = ({
  children,
  alignItems,
  colGap,
  rowGap,
}: GridContainerProps) => {
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
};

interface GridColumnProps {
  children: ReactNode;
  className?: string;
  colStart?: Sprinkles['gridColumnStart'];
  colEnd?: Sprinkles['gridColumnEnd'];
  rowStart?: Sprinkles['gridRowStart'];
  rowEnd?: Sprinkles['gridRowEnd'];
}

const Column = ({
  colStart,
  colEnd,
  rowStart,
  rowEnd,
  children,
  className,
}: GridColumnProps) => {
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
};

export { Container, Column };
