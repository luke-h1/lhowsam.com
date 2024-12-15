/* eslint-disable jsx-a11y/label-has-associated-control */
import { SelectHTMLAttributes } from 'react';
import * as styles from './Select.css';

type Option = {
  value: string;
  label: string;
};

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  label?: string;
  hint?: string;
}

export default function Select({ options, label, hint, ...rest }: SelectProps) {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <select className={styles.select} {...rest}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {hint && <p className={styles.hint}>{hint}</p>}
    </div>
  );
}
