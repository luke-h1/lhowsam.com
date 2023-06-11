import cn from 'classnames';
import Link from 'next/link';
import { ReactNode } from 'react';
import s from './Button.module.scss';

interface Props {
  children: ReactNode | string;
  type: 'button' | 'submit' | 'reset';
  href?: string;
  onClick?: () => void;
  variant?: 'transparent' | 'like';
  disabled?: boolean;
}

const Button = ({
  children,
  type,
  disabled,
  href,
  onClick,
  variant,
}: Props) => {
  const classes = cn(s.button, s[variant || 'transparent']);

  if (onClick || !href) {
    return (
      <button
        className={classes}
        // eslint-disable-next-line react/button-has-type
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
  if (href.startsWith('/')) {
    return (
      <Link href={href}>
        <button
          className={classes}
          // eslint-disable-next-line react/button-has-type
          type={type}
          disabled={disabled}
        >
          {children}
        </button>
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {children}
    </a>
  );
};
export default Button;
