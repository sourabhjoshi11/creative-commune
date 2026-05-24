'use client';
import { useState, useEffect, useRef } from 'react';
import { FAQS } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [revealed, setRevealed] = useState<boolean[]>(Array(FAQS.length).fill(false));
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [ref, inView] = useInView();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setRevealed(prev => { const next = [...prev]; next[i] = true; return next; });
            }, i * 150);
            obs.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <section className={`${styles.section} ${inView ? styles.visible : ''}`} ref={ref as React.RefObject<HTMLElement>}>
      <span className={styles.label}>FAQ</span>
      <h2 className={styles.heading}>Common Questions</h2>
      <div className={styles.list}>
        {FAQS.map((faq, i) => (
          <div
            key={i}
            ref={el => { itemRefs.current[i] = el; }}
            className={`${styles.item} ${openIdx === i ? styles.open : ''} ${revealed[i] ? styles.revealed : ''}`}
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
          >
            <div className={styles.question}>
              <span>{faq.q}</span>
              <span className={styles.icon}>+</span>
            </div>
            <div className={styles.answer}>
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
