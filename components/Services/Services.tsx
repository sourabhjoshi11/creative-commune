'use client';
import { useState, useEffect, useRef } from 'react';
import { SERVICES } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import styles from './Services.module.css';

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [autoOpened, setAutoOpened] = useState<boolean[]>(Array(SERVICES.length).fill(false));
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [ref, inView] = useInView();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    rowRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setAutoOpened(prev => { const next = [...prev]; next[i] = true; return next; });
            setOpenIdx(i);
            obs.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <section id="services" className={`${styles.section} ${inView ? styles.visible : ''}`} ref={ref as React.RefObject<HTMLElement>}>
      <span className={styles.label}>What We Do</span>
      <h2 className={styles.heading}>Services</h2>
      <div className={styles.list}>
        {SERVICES.map((s, i) => (
          <div
            key={s.num}
            ref={el => { rowRefs.current[i] = el; }}
            className={`${styles.row} ${openIdx === i ? styles.open : ''}`}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
          >
            <div className={styles.rowHeader}>
              <span className={`${styles.num} ${hoveredIdx === i || openIdx === i ? styles.numActive : ''}`}>{s.num}</span>
              <div className={styles.rowContent}>
                <span className={styles.icon}>{s.icon}</span>
                <span className={styles.name}>{s.name}</span>
              </div>
              <span className={`${styles.arrow} ${openIdx === i ? styles.arrowOpen : ''}`}>→</span>
            </div>
            <div className={styles.imageReveal} style={{ background: s.image, opacity: hoveredIdx === i ? 1 : 0 }} />
            <div className={styles.drawer}>
              <p className={styles.desc}>{s.desc}</p>
              <div className={styles.benefits}>
                {s.benefits.map(b => <span key={b} className={styles.tag}>{b}</span>)}
              </div>
              <a href="#contact" className={styles.learnMore}>Learn More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
