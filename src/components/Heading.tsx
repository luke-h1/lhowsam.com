import { Heading as HeadingTag } from '@frontend/types/mdx';
import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './Heading.module.scss';

type Variant = 'primary' | 'secondary' | 'tertiary';

interface Props {
  children?: ReactNode;
  as?: HeadingTag;
  variant?: Variant;
  className?: string;
  beforeContent?: string;
  align?: 'left' | 'center' | 'right';
}
const Heading = ({
  children,
  as: Element = 'h1',
  className,
  beforeContent,
  variant = 'primary',
  align = 'center',
}: Props) => {
  return (
    <Element
      data-before-content={beforeContent}
      className={classNames(className, styles[variant], {
        [styles.center]: align === 'center',
        [styles.left]: align === 'left',
        [styles.right]: align === 'right',
      })}
    >
      {children}
      {/* {variant === 'primary' && <span className={styles.primaryBigHeading}>{children}</span>} */}
    </Element>
  );
};
export default Heading;
