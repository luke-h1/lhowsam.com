import React from 'react';

interface TitleProps {
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => (
  <h1 className="md:leading-10 text-3xl tracking-wide text-center text-bold sm:text-md ml-4 leading-10 mb-5 dark:text-white">
    {children}
  </h1>
);
