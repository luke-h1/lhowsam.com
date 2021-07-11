import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <main className="max-w-4xl mx-auto mt-13 antialiased">{children}</main>
  );
};
export default Container;
