import cn from 'classnames';
import { ChangeEvent } from 'react';
import s from './Input.module.scss';

interface Props {
  type: string;
  placeholder?: string;
  disabled?: boolean;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({
  type,
  placeholder,
  disabled,
  value,
  onChange,
  className,
}: Props) => {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      className={cn(s.input, className)}
      disabled={disabled}
      onChange={onChange}
    />
  );
};
export default Input;
