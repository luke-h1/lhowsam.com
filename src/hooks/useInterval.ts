/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable consistent-return */
import { useRef, useEffect } from 'react';

type Delay = number | null;
type CallbackFn = (...args: unknown[]) => void;

export const useInterval = (callback: CallbackFn, delay: Delay) => {
  const savedCallback = useRef<CallbackFn>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // @ts-ignore
  useEffect(() => {
    const handler: CallbackFn = (...args) => savedCallback.current?.(...args);

    if (delay !== null) {
      const intervalId = setInterval(handler, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay]);
};
