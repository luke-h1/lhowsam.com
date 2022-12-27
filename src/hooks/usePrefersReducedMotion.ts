import { useState, useEffect } from 'react';
import { isServer } from './isServer';

const QUERY = '(prefers-reduced-motion: no-preference)';

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    return isServer ? true : !window.matchMedia(QUERY).matches;
  });

  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(!event.matches);
    };

    mediaQueryList.addEventListener('change', listener);

    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, []);

  return prefersReducedMotion;
};
export default usePrefersReducedMotion;
