/* eslint-disable jsx-a11y/label-has-associated-control */
import { InputHTMLAttributes } from 'react';
import * as styles from './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input {...props} className={styles.root} />
    </div>
  );
}
