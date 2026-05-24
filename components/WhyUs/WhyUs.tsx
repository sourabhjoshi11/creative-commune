'use client';
import { WHY_US_FEATURES } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import styles from './WhyUs.module.css';

export default function WhyUs() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className={`${styles.section} ${inView ? styles.visible : ''}`} ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.label}>Why Us</span>
          <h2 className={styles.heading}>Built for brands that demand <em>excellence.</em></h2>
          <p className={styles.text}>We combine luxury aesthetics with data-driven performance marketing and AI-powered systems to deliver results that matter.</p>
          <a href="#contact" className={styles.cta}>Start Your Journey</a>
        </div>
        <div className={styles.grid}>
          {WHY_US_FEATURES.map((f, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.dot} />
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
