import React from 'react';
import styles from './photo.module.css';

const Photo = () => {
  return (
    <div className={styles.stack}>
      <div
        className={styles.photo}
        style={{ background: 'url(/images/luke.jpeg)' }}
      />
    </div>
  );
};
export default Photo;
