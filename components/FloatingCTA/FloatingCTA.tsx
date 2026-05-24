'use client';
import { useEffect, useState } from 'react';
import styles from './FloatingCTA.module.css';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a href="#contact" className={styles.btn} aria-label="Book a Strategy Call">
      <span className={styles.icon}>✆</span>
      <span className={styles.text}>Book a Call</span>
    </a>
  );
}
