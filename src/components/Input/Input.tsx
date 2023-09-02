import { forwardRef } from 'react';
import * as styles from './Input.css';

type Props = JSX.IntrinsicElements['input'];

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <input ref={ref} {...props} className={styles.root} />;
});

Input.displayName = 'Input';

export default Input;
