'use client';

import { useToast } from '@frontend/context/ToastContext';
import { usePathname } from 'next/navigation';
import { Twitter, Link as FeatherLink } from 'react-feather';
import Link from '../Link';
import Tooltip from '../Tooltip';
import * as styles from './SocialShare.css';

export default function SocialShare() {
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
          <Twitter size={20} name="twitter" />
        </Link>
      </Tooltip>
      <Tooltip content="Copy link">
        <button
          className={styles.item}
          onClick={handleCopy}
          type="button"
          data-testid="copy-button"
        >
          <FeatherLink size={20} />
        </button>
      </Tooltip>
    </div>
  );
}
