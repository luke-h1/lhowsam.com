import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

const options = {
  threshold: 1,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useRunningHeader = (_el: HTMLElement | null) => {
  const [id, setId] = useState('');
  // const [progresss, setProgress] = useState(0);

  const { oberserveElement, entry, cleanup } =
    useIntersectionObserver<HTMLElement>(options);

  const currentlyVisibleHeaders = useRef<Set<HTMLElement>>(new Set());

  // eslint-disable-next-line no-shadow
  const setRunningHeader = (el: HTMLElement | null) => {
    if (!el) {
      setId('');
      cleanup();
    }
    el?.querySelectorAll<HTMLElement>(
      'h2, h3, h4, h5, h6, #introduction',
    ).forEach(oberserveElement);
  };

  useEffect(() => {
    if (!entry) {
      // eslint-disable-next-line no-useless-return
      return;
    }

    if (entry.isIntersecting) {
      currentlyVisibleHeaders.current.add(entry.target as HTMLElement);
    } else {
      currentlyVisibleHeaders.current.delete(entry.target as HTMLElement);
    }

    const highestEl = [
      ...currentlyVisibleHeaders.current,
    ].reduce<HTMLElement | null>((acc, node) => {
      if (!acc) {
        return node;
      }
      if (
        // eslint-disable-next-line no-bitwise
        acc.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_FOLLOWING
      ) {
        return node;
      }
      return acc;
    }, null);

    if (highestEl) {
      setId(highestEl.id);
    }
  }, [entry]);

  return {
    id,
    setRunningHeader,
  };
};
