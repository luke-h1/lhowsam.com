import classnames from 'classnames';
import styles from './buttongroup.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const ButtonGroup = ({ children, className }: Props) => {
  return <div className={classnames(styles.group, className)}>{children}</div>;
};
export default ButtonGroup;
