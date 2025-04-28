import React, { useState, useEffect, useRef } from 'react';
import styles from './CatBox.module.scss';
import { fetchCatFromApi } from '../../api/catApi';
import GetCatButton from '../GetCatButton/GetCatButton';
import CatImage from '../CatImage/CatImage';

const CatBox = () => {
  const [enabled, setEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [catUrl, setCatUrl] = useState('');
  const intervalRef = useRef(null);

  const fetchCat = async () => {
    try {
      const url = await fetchCatFromApi();
      setCatUrl(url);
    } catch (e) {
      setCatUrl('');
    }
  };

  useEffect(() => {
    if (enabled) fetchCat();
  }, [enabled]);

  useEffect(() => {
    if (autoRefresh && enabled) {
      intervalRef.current = setInterval(fetchCat, 5000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [autoRefresh, enabled]);

  return (
    <div className={styles.catBox}>
      <label className={styles.checkbox}><input type="checkbox" checked={enabled} onChange={e => setEnabled(e.target.checked)} /> Enabled</label>
      <label className={styles.checkbox}><input type="checkbox" checked={autoRefresh} disabled={!enabled} onChange={e => setAutoRefresh(e.target.checked)} /> Auto-refresh every 5 second</label>
      <GetCatButton disabled={!enabled} onClick={fetchCat} />
      <CatImage url={catUrl} />
    </div>
  );
};

export default CatBox; 