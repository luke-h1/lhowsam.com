'use client';

import { useToast } from '@frontend/context/ToastContext';
import { usePathname } from 'next/navigation';
import { Twitter, Link as FeatherLink } from 'react-feather';
import Link from '../Link';
import Tooltip from '../Tooltip';
import * as styles from './SocialShare.css';

const SocialShare = () => {
  const pathname = usePathname();
  const { setToast } = useToast();

  const id = 'SocialShare';

  const handleCopy = () => {
    navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_URL}${pathname}`);
    setToast({
      content: 'Copied to clipboard',
    });
  };

  return (
    <div className={styles.root}>
      <Tooltip content="Twitter">
        <Link
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            `${process.env.NEXT_PUBLIC_URL}${pathname}`,
          )}`}
          data-testid={`${id}-Twitter`}
          className={styles.item}
        >
          <Twitter width=".95em" name="twitter" />
        </Link>
      </Tooltip>
      <Tooltip content="Copy link">
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          className={styles.item}
          onClick={handleCopy}
          type="button"
          data-testid="copy-button"
        >
          <FeatherLink width=".95em" />
        </button>
      </Tooltip>
    </div>
  );
};
export default SocialShare;
