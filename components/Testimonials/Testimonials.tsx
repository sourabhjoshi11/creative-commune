'use client';
import { useRef } from 'react';
import { TESTIMONIALS } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView();

  return (
    <section className={`${styles.section} ${inView ? styles.visible : ''}`} ref={ref as React.RefObject<HTMLElement>}>
      <span className={styles.label}>What Clients Say</span>
      <h2 className={styles.heading}>Results That Speak</h2>
      <div className={styles.trackWrap}>
        <div className={styles.track} ref={scrollRef}>
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.stars}>{'★★★★★'}</div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.divider} />
              <div className={styles.author}>
                <span className={styles.initials}>{t.initials}</span>
                <div>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.company}>{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
