import { useState, useEffect, useCallback } from 'react';

export const useLocalStorage = <T extends string>(
  key: string,
  defaultValue: T,
) => {
  const [val, setVal] = useState<T | null>(null);

  const setStoredVal = useCallback(
    // eslint-disable-next-line no-shadow
    (val: T) => {
      setVal(val);
      try {
        localStorage.setItem(key, val);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    },
    [key],
  );

  useEffect(() => {
    try {
      const savedValue = localStorage.getItem(key);
      setVal((savedValue as T) || defaultValue);
      setStoredVal((savedValue as T) || defaultValue);
    } catch {
      setVal(defaultValue);
      setStoredVal(defaultValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return [val, setStoredVal];
};
