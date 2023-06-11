import { ReactNode } from 'react';
import s from './VisuallyHidden.module.scss';

interface Props {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

const VisuallyHidden = ({ as: Element = 'span', children }: Props) => {
  return <Element className={s.root}>{children}</Element>;
};
export default VisuallyHidden;
