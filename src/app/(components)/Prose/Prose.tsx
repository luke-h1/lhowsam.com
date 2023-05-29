import { ReactNode } from 'react';
import './Prose.css';

interface Props {
  children: ReactNode;
}

const Prose = ({ children }: Props) => {
  return <div className="prose">{children}</div>;
};

export default Prose;
