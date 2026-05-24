'use client';
import { useEffect, useState } from 'react';
import { useCursor } from '@/hooks/useCursor';
import styles from './Cursor.module.css';

export default function Cursor() {
  const { x, y } = useCursor();
  const [hover, setHover] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHover(!!target.closest('a, button, [role="button"]'));
    };
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    return () => {
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div
        className={`${styles.ring} ${hover ? styles.hover : ''}`}
        style={{ transform: `translate(${x - 16}px, ${y - 16}px)` }}
      />
      <div
        className={styles.dot}
        style={{ transform: `translate(${x - 3}px, ${y - 3}px)` }}
      />
    </>
  );
}
