import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ children, href }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
      type="button"
    >
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </button>
  );
};
export default Button;
