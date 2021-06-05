import { EffectCallback, useEffect, useState } from 'react';

export const useMounted = (effect?: EffectCallback, initialState = false) => {
  const [isMounted, setMounted] = useState(initialState);

  useEffect(() => {
    setMounted(true);

    if (effect) {
      return effect();
    }

    return undefined;
  }, []);

  return {
    isMounted,
    onMounted<T, R>(value: T, defaultValue?: R): T | R | undefined {
      return isMounted ? value : defaultValue;
    },
  };
};
