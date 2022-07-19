import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <span className="sr-only">loading</span>
      <div className={styles.ring}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;
