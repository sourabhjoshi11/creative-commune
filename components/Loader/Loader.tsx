'use client';
import { useEffect, useState } from 'react';
import styles from './Loader.module.css';

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('cc-loaded')) {
      setVisible(false);
      return;
    }
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setExit(true);
      setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = '';
        sessionStorage.setItem('cc-loaded', '1');
      }, 800);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`${styles.loader} ${exit ? styles.exit : ''}`}>
      <div className={styles.content}>
        <span className={styles.monogram}>CC</span>
        <span className={styles.name}>Creative Commune</span>
      </div>
    </div>
  );
}
