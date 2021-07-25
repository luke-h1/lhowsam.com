import React from 'react';
import { RoughNotation } from 'react-rough-notation';

interface RoughHighlightProps {
  color: string;
  children: string;
}

export const RoughHighlight: React.FC<RoughHighlightProps> = ({
  color,
  children,
}) => {
  const duration = Math.floor(35 * children.length);
  return (
    <RoughNotation
      type="highlight"
      multiline
      strokeWidth={5}
      padding={[0, 4]}
      iterations={1}
      animationDuration={duration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};
