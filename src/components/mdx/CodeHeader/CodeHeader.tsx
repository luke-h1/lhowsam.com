import cn from 'classnames';
import { memo } from 'react';
import styles from './CodeHeader.module.scss';

interface CodeHeaderProps {
  isCopied: boolean;
  className?: string;
  onCopy: () => void;
  code?: string;
  title?: string;
}

export const CodeHeader = memo<CodeHeaderProps>(
  ({ onCopy, isCopied, title }) => {
    return (
      <header className={styles.header}>
        <div className={styles.titleAndDots}>
          <div
            className={cn(styles.dots, {
              [styles.hiddenOnMobile]: title,
            })}
          >
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
          </div>
          <p data-codeTitle className={styles.title}>
            {title}
          </p>
        </div>

        <div className={styles.actions}>
          <button
            onClick={onCopy}
            className={styles.clipboard}
            type="button"
            style={{ backgroundColor: 'red' }}
          >
            <span className="visually-hidden">
              {isCopied ? 'Copied' : 'copy'}
            </span>
            {isCopied ? (
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.2194 9.99989C4.9894 9.99989 4.7694 9.90489 4.6119 9.73739L0.559404 5.42156C0.24357 5.08656 0.26107 4.55906 0.59607 4.24406C0.931904 3.92906 1.4594 3.94572 1.77357 4.28072L5.21107 7.93989L12.2177 0.271557C12.5294 -0.0692762 13.0561 -0.0917762 13.3961 0.218224C13.7352 0.528224 13.7586 1.05572 13.4486 1.39489L5.8344 9.72822C5.67857 9.89989 5.4569 9.99822 5.22524 9.99989H5.2194Z"
                  fill="var(--blue-200)"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.clipboardIcon}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 19C19 19.552 18.551 20 18 20H6C5.449 20 5 19.552 5 19V8C5 7.448 5.449 7 6 7V8C6 9.103 6.897 10 8 10H16C17.103 10 18 9.103 18 8V7C18.551 7 19 7.448 19 8V19ZM8 4L16 4.003V5V8H8V5V4ZM18 5V4C18 2.897 17.103 2 16 2H8C6.897 2 6 2.897 6 4V5C4.346 5 3 6.346 3 8V19C3 20.654 4.346 22 6 22H18C19.654 22 21 20.654 21 19V8C21 6.346 19.654 5 18 5Z"
                  fill="white"
                />
              </svg>
            )}
          </button>
        </div>
      </header>
    );
  },
);

CodeHeader.displayName = 'CodeHeader';
