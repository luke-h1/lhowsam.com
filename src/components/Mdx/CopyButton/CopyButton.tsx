import { copyToClipboard } from '@src/utils/clipboard';
import clsx from 'clsx';
import debounce from 'lodash/debounce';
import { useEffect, useState } from 'react';
import Confetti, { ConfettiConfig } from 'react-dom-confetti';
import styles from './CopyButton.module.scss';

interface Props {
  label: string;
  text: string;
}

const CopyButton = ({ label, text }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await copyToClipboard(text);
      setCopied(true);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  useEffect(() => {
    const handleClickDebounced = debounce(() => setCopied(false), 1000);
    return () => handleClickDebounced.cancel();
  }, [copied]);

  const config: ConfettiConfig = {
    spread: 360,
    startVelocity: 20,
  };

  return (
    <div className={styles.wrapper}>
      <Confetti active={copied} config={config} />
      <button
        onClick={handleClick}
        className={clsx(styles.button, { [styles.copied]: copied })}
        type="button"
      >
        {copied ? 'Copied 🎉' : label}
      </button>
    </div>
  );
};

export default CopyButton;
