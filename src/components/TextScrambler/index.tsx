import useInterval from '@frontend/hooks/useInterval';
import { useMounted } from '@frontend/hooks/useMounted';
import { useReducedMotion } from 'framer-motion';
import * as React from 'react';
import * as styles from './TextScrambler.css';
import { getScrambledState } from './util';

interface TextScramblerProps {
  children: string;
  speed?: number;
}

const TextScrambler = ({ children, speed = 0.5 }: TextScramblerProps) => {
  const { isMounted } = useMounted();
  const shouldReduceMotion = useReducedMotion();
  const size = children.length;

  const [[unscrambled, scrambled], setScrambledText] = React.useState(
    getScrambledState(children, size, 0),
  );
  const [count, increment] = React.useReducer(state => state + 1, 0);
  const finished = count > size;

  useInterval(
    () => {
      increment();
      setScrambledText(getScrambledState(children, size, count));
    },
    finished ? 0 : 30 / speed,
  );

  if (isMounted && shouldReduceMotion) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }

  return (
    <span className={styles.root}>
      <span className={styles.placeholder}>{children}</span>
      {isMounted ? (
        <span className={styles.scrambled} aria-hidden>
          {unscrambled}
          {scrambled}
        </span>
      ) : null}
    </span>
  );
};

export { TextScrambler };
