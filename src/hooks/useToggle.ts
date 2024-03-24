import { useCallback, useState } from 'react';

type Toggle = ((nextValue?: boolean | unknown) => void) & {
  off: () => void;
  on: () => void;
};

export default function useToggle(initialValue: boolean): [boolean, Toggle] {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleFunc = useCallback(
    (nextValue?: unknown) => {
      if (typeof nextValue === 'boolean') {
        setValue(nextValue);
      } else {
        setValue(currentValue => !currentValue);
      }
    },
    [setValue],
  );

  const toggle = toggleFunc as Toggle;

  toggle.off = useCallback(() => setValue(false), [setValue]);

  toggle.on = useCallback(() => setValue(true), [setValue]);

  return [value, toggle];
}
