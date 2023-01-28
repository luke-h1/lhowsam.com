import classNames from 'classnames';
import { ReactNode } from 'react';
import * as styles from './ButtonGroup.css';

interface Props {
  children: ReactNode;
  className?: string;
  testId?: string;
}

const ButtonGroup = ({ children, className, testId }: Props) => {
  return (
    <div data-testid={testId} className={classNames(styles.group, className)}>
      {children}
    </div>
  );
};
export default ButtonGroup;
