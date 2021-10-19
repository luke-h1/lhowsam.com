/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable consistent-return */
import { RefObject, useEffect, useRef, useState } from 'react';

const useHover: () => [RefObject<HTMLDivElement>, boolean] = () => {
  const [value, setValue] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  // @ts-ignore
  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, []);
  return [ref, value];
};
export default useHover;
