'use client';
import { useState } from 'react';
import { PROCESS } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import styles from './Process.module.css';

export default function Process() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView();

  return (
    <section id="process" className={`${styles.section} ${inView ? styles.visible : ''}`} ref={ref as React.RefObject<HTMLElement>}>
      <span className={styles.label}>How We Work</span>
      <h2 className={styles.heading}>Our Process</h2>
      <div className={styles.tabs}>
        {PROCESS.map((p, i) => (
          <button
            key={p.step}
            className={`${styles.tab} ${active === i ? styles.active : ''}`}
            onClick={() => setActive(i)}
          >
            <span className={styles.stepNum}>{p.step}</span>
            <span className={styles.stepTitle}>{p.title}</span>
          </button>
        ))}
      </div>
      <div className={styles.panel} key={active}>
        <p className={styles.panelText}>{PROCESS[active].desc}</p>
      </div>
      <div className={styles.arrows}>
        <button onClick={() => setActive(a => Math.max(0, a - 1))} aria-label="Previous step">←</button>
        <button onClick={() => setActive(a => Math.min(PROCESS.length - 1, a + 1))} aria-label="Next step">→</button>
      </div>
    </section>
  );
}
