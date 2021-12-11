import getBreakpointOrSize from '@src/utils/getBreakpointOrSize';
import { Breakpoint } from '@src/utils/style';
import { useState, useEffect } from 'react';

type UseBreakpointProps = (
  { from, to }: { from?: Breakpoint | number; to: Breakpoint | number },
  { onEnter, onLeave }: { onEnter: () => void; onLeave: () => void },
) => void;

const useBreakpointRange: UseBreakpointProps = (
  { from = 0, to },
  { onEnter, onLeave },
) => {
  const [currentState, setCurrentState] = useState('');
  const fromSize = getBreakpointOrSize(from);
  const toSize = getBreakpointOrSize(to);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const withinFrom = screenWidth > fromSize;
      const withinTo = !toSize || screenWidth < toSize;
      const newState = `${withinFrom}-${withinTo}`;

      // Ensures it runs once on enter and once on leave
      if (currentState !== newState) {
        setCurrentState(newState);

        if (withinFrom && withinTo && onEnter) {
          onEnter();
        } else if (onLeave) {
          onLeave();
        }
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [fromSize, toSize, onEnter, onLeave, currentState, setCurrentState]);
};
export default useBreakpointRange;
