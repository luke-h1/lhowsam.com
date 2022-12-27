import copyToClipboard from 'copy-to-clipboard';
import { RefObject, useState } from 'react';

const useCopyableRef = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    if (copied) {
      // eslint-disable-next-line no-useless-return
      return;
    }

    if (!ref.current) {
      throw new Error('Ref is null');
    }
    copyToClipboard(ref.current.textContent || '');
    setCopied(true);
  };
  return {
    ref,
    copied,
    copy,
  };
};
export default useCopyableRef;
