/* eslint-disable */
import {
  DetailedHTMLProps,
  HTMLAttributes,
  isValidElement,
  useRef,
  useCallback,
} from 'react';

import useCopyableRef from '../../../hooks/useCopyableRef';
import { CodeHeader } from '../CodeHeader/CodeHeader';
import styles from './Code.module.scss';

export const Code = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>,
) => {
  const preRef = useRef<HTMLPreElement | null>(null);
  const { copied, copy } = useCopyableRef<HTMLPreElement>(preRef);

  const getCodeTitle = useCallback(() => {
    if (isValidElement(props.children)) {
      if ('data-title' in props.children.props) {
        return props.children.props['data-title'] as string;
      }

      return undefined;
    }
    return undefined;
  }, [props.children]);

  return (
    <article className={styles.wrapper}>
      <CodeHeader
        code={preRef.current?.textContent as string}
        onCopy={copy}
        isCopied={copied}
        className={props.className}
        title={getCodeTitle()}
      />
      <pre ref={preRef} {...props}>
        {isValidElement(props.children) && <code {...props.children.props} />}
      </pre>
    </article>
  );
};
