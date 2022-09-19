import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

const VisuallyHidden = ({ as: Element = 'span', children }: Props) => {
  return <Element className="sr-only">{children}</Element>;
};

export default VisuallyHidden;
