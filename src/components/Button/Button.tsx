import cn from 'classnames';
import Link from 'next/link';
import styles from './Button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  onClick?: () => void;
  variant?: 'transparent' | 'like';
  disabled?: boolean;
};

const Button = ({
  children,
  type,
  href,
  variant,
  onClick,
  disabled,
}: ButtonProps) => {
  const classes = cn(styles.button, styles[variant as keyof typeof variant]);
  if (onClick || !href) {
    return (
      <button
        className={classes}
        type={type === 'submit' ? 'submit' : 'button'}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
  if (href.startsWith('/')) {
    return (
      <Link href={href} passHref>
        <a>
          <button
            className={classes}
            type={type === 'submit' ? 'submit' : 'button'}
            disabled={disabled}
          >
            {children}
          </button>
        </a>
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
