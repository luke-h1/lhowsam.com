'use client';

import { useAppDispatch } from '@frontend/store/hooks';
import { setToast } from '@frontend/store/reducers/toastReducer';
import { usePathname } from 'next/navigation';
import { Twitter, Link as FeatherLink } from 'react-feather';
import Link from '../Link';
import Tooltip from '../Tooltip';
import * as styles from './SocialShare.css';

const SocialShare = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const handleCopy = () => {
    navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_URL}${pathname}`);
    dispatch(
      setToast({
        content: 'Copied to clipboard',
      }),
    );
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
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button className={styles.item} onClick={handleCopy} type="button">
          <FeatherLink width=".95em" />
        </button>
      </Tooltip>
    </div>
  );
};
export default SocialShare;
