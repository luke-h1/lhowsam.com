'use client';

import { usePathname } from 'next/navigation';
import { Twitter, Link as FeatherLink } from 'react-feather';
import Link from '../Link/Link';
import { toast } from '../Toast/Toast';
import Tooltip from '../Tooltip/Tooltip';
import * as styles from './SocialShare.css';

const SocialShare = () => {
  const pathname = usePathname();

  const handleCopy = () => {
    navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_URL}${pathname}`);
    toast({
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
          className={styles.item}
        >
          <Twitter width=".95em" />
        </Link>
      </Tooltip>
      <Tooltip content="Copy link">
        <button className={styles.item} onClick={handleCopy} type="button">
          <FeatherLink width=".95em" />
        </button>
      </Tooltip>
    </div>
  );
};
export default SocialShare;
