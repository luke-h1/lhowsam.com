import { sprinkles, Sprinkles } from '@frontend/styles/sprinkles.css';
import classNames from 'classnames';
import { ReactNode } from 'react';
import * as styles from './Grid.css';

interface GridContainerProps {
  children: ReactNode;
  columnGap?: Sprinkles['columnGap'];
  rowGap?: Sprinkles['rowGap'];
}
const Container = ({
  columnGap = 'xxxl',
  rowGap = 'none',
  children,
}: GridContainerProps) => {
  return (
    <div
      className={classNames(
        styles.container,
        sprinkles({
          columnGap,
          rowGap,
        }),
      )}
    >
      {children}
    </div>
  );
};

interface GridColumnProps {
  children: ReactNode;
  className?: string;
  gridColumnStart?: Sprinkles['gridColumnStart'];
  gridColumnEnd?: Sprinkles['gridColumnEnd'];
  gridRowStart?: Sprinkles['gridRowStart'];
  gridRowEnd?: Sprinkles['gridRowEnd'];
}

const Column = ({
  children,
  className,
  gridColumnStart,
  gridColumnEnd,
  gridRowEnd,
  gridRowStart,
}: GridColumnProps) => {
  return (
    <div
      className={classNames(
        sprinkles({
          gridColumnStart,
          gridColumnEnd,
          gridRowEnd,
          gridRowStart,
        }),
        className,
      )}
    >
      {children}
    </div>
  );
};
export { Container, Column };
