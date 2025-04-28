import React from 'react';
import styles from './GetCatButton.module.scss';

const GetCatButton = ({ disabled, onClick }) => (
  <button className={styles.button} disabled={disabled} onClick={onClick}>
    Get cat
  </button>
);

export default GetCatButton; 