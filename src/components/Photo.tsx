import React from 'react';
import { animated } from 'react-spring';

import styles from './photo.module.css';

const Photo = () => {
  return (
    <>
      <div className={styles.stack}>
        <animated.div
          className={styles.photo}
          style={{ background: 'url(/images/luke.jpeg)' }}
        />
      </div>
    </>
  );
};
export default Photo;
