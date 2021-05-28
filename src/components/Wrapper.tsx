import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-col align-center items-center  mb-3 max-w-screen-md sm:max-w-lg lg:max-w-screen-md md:max-w-screen-sm sm:p-4">
      {children}
    </div>
  );
};
export default Wrapper;
