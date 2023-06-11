import { ReactNode } from 'react';
import { AlertTriangle, Info } from 'react-feather';
import s from './warning.module.scss';

interface Props {
  children: ReactNode;
  type: 'warning' | 'info';
}

const Warning = ({ children, type }: Props) => {
  return (
    <div className={s.warning}>
      {type === 'info' ? <Info /> : <AlertTriangle />}
      <p className={s.text}>{children}</p>
    </div>
  );
};

export default Warning;
