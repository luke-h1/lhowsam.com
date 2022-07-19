import classNames from 'classnames';
import styles from './Input.module.scss';

interface InputProps {
  type: string;
  placeholder?: string;
  disabled?: boolean;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({
  type = 'text',
  placeholder,
  disabled,
  value,
  onChange,
  className,
}: InputProps) => {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      className={classNames(styles.input, className)}
      disabled={disabled}
      onChange={onChange}
    />
  );
};
export default Input;
