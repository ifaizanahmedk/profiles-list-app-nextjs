import React from 'react';
// import PropTypes from 'prop-types';

import styles from '@/styles/Loader.module.css';

function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.skChase}>
        <div className={styles.skChaseDot}>&nbsp;</div>
        <div className={styles.skChaseDot}>&nbsp;</div>
        <div className={styles.skChaseDot}>&nbsp;</div>
        <div className={styles.skChaseDot}>&nbsp;</div>
        <div className={styles.skChaseDot}>&nbsp;</div>
        <div className={styles.skChaseDot}>&nbsp;</div>
      </div>
    </div>
  );
}

// Loader.propTypes = {};

export default Loader;
