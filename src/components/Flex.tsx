import React from 'react';

interface FlexProps {
  children: React.ReactNode;
}

const Flex: React.FC<FlexProps> = ({ children }) => {
  return (
    <div className="flex flex-col align-center items-center place-items-center mb-2">
      {children}
    </div>
  );
};
export default Flex;
