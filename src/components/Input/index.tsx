import { InputHTMLAttributes } from 'react';
import * as styles from './Input.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  return <input {...props} className={styles.root} />;
}
