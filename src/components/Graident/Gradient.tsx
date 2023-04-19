import classNames from 'classnames';
import * as styles from './Gradient.css';

const Gradient = () => {
  return (
    <div className={styles.root} aria-hidden>
      <span className={classNames(styles.blob, styles.left)} />
      <span className={classNames(styles.blob, styles.right)} />
    </div>
  );
};

export default Gradient;
