import React from 'react';
import styles from './CatImage.module.scss';

const CatImage = ({ url }) => (
  <div className={styles.catImageWrap}>
    {url ? (
      <img src={url} alt="cat" className={styles.catImage} />
    ) : (
      <div className={styles.placeholder} />
    )}
  </div>
);

export default CatImage; 