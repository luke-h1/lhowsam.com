import React from 'react';

interface WrapperProps {
children: React.ReactNode
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-col align-center items-center mt-7 mb-5 max-w-screen-md sm:max-w-lg lg:max-w-screen-md md:max-w-screen-sm">
      {children}
    </div>
  );
};
