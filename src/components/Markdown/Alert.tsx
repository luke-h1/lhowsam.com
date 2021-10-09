import React from 'react';
import WarnIcon from '@src/components/icons/Warn';
import ErrorIcon from '@src/components/icons/Error';
import InfoIcon from '@src/components/icons/Info';
import classes from '@src/utils/classes';
import styles from '@src/styles/icons.module.scss';

type AlertIconType = 'info' | 'error' | 'warn';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: AlertIconType;
  children: React.ReactChild;
}
const Icon = ({ type }: { type: AlertIconType }) => {
  switch (type) {
    case 'error':
      return <ErrorIcon height="20" width="20" />;
    case 'info':
      return <InfoIcon height="20" width="20" />;
    case 'warn':
      return <WarnIcon height="20" width="20" />;
    default:
      return null;
  }
};

const Alert = ({ children, type, ...rest }: Props) => {
  return (
    <div role="alert" className={classes(styles.alert, styles[type])} {...rest}>
      <Icon type={type} />
      <span>{children}</span>
    </div>
  );
};

export default Alert;
