import { ReactNode } from 'react';

interface Props {
  name: string;
  children: ReactNode;
}

const Emoji = ({ name, children }: Props) => {
  return (
    <span role="img" aria-label={name}>
      {children}
    </span>
  );
};
export default Emoji;
