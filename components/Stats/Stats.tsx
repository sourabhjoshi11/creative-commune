'use client';
import { STATS } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import styles from './Stats.module.css';

export default function Stats() {
  const [ref, inView] = useInView();

  return (
    <section className={styles.stats} ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.grid}>
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`${styles.item} ${inView ? styles.visible : ''}`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
