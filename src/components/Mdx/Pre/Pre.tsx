import { copyToClipboard } from '@src/utils/clipboard';
import clsx from 'clsx';
import { ReactNode, useEffect, useRef, useState } from 'react';
import CheckIcon from '../../../../public/svg/check.svg';
import CopyIcon from '../../../../public/svg/copy.svg';

import styles from './Pre.module.scss';

interface Props {
  children: ReactNode;
}

const Pre = ({ children, ...props }: Props) => {
  const ref = useRef<HTMLPreElement | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 2000);

    return () => clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    if (ref.current?.innerText) {
      await copyToClipboard(ref.current.innerText);
      setCopied(true);
    }
  };
  return (
    <pre {...props} ref={ref} className={styles.pre}>
      <div className={clsx(styles.copy, { [styles.copied]: copied })}>
        <button
          className={styles.btn}
          onClick={handleCopy}
          aria-label="Copy to clipboard"
          type="button"
        >
          <div className={styles.icon}>
            {copied ? <CheckIcon /> : <CopyIcon />}
          </div>
        </button>
      </div>
      {children}
    </pre>
  );
};

export default Pre;
