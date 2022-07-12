import classnames from 'classnames';
import styles from './buttongroup.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
  testId?: string;
}

const ButtonGroup = ({ children, className, testId }: Props) => {
  return (
    <div data-testid={testId} className={classnames(styles.group, className)}>
      {children}
    </div>
  );
};
export default ButtonGroup;
