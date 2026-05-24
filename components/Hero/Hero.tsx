'use client';
import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const WORDS = ['luxury', 'fashion', 'hospitality', 'lifestyle', 'emerging'];
const TRUST = ['Fashion', 'Hospitality', 'Lifestyle', 'F&B', 'Tech'];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.grid} />
      <div className={styles.orbTop} />
      <div className={styles.orbBottom} />
      <div className={`${styles.content} ${loaded ? styles.loaded : ''}`}>
        <span className={styles.badge} style={{ transitionDelay: '0.2s' }}>Creative &amp; Digital Growth Agency</span>
        <h1 className={styles.headline} style={{ transitionDelay: '0.4s' }}>
          <span>We build brands that</span>
          <em>don&apos;t just look good —</em>
          <span>they dominate attention.</span>
        </h1>
        <p className={styles.sub} style={{ transitionDelay: '0.6s' }}>
          Helping <span className={styles.word} key={wordIdx}>{WORDS[wordIdx]}</span> brands scale through Strategy, Content &amp; AI.
        </p>
        <div className={styles.ctas} style={{ transitionDelay: '0.8s' }}>
          <a href="#contact" className={styles.ctaPrimary}>Book a Strategy Call</a>
          {/* <a href="#services" className={styles.ctaSecondary}>View Our Work</a> */}
        </div>
        <div className={styles.trust} style={{ transitionDelay: '1s' }}>
          <span className={styles.trustLabel}>Trusted by brands in</span>
          {TRUST.map((t, i) => (
            <span key={t} className={styles.trustItem}>
              {i > 0 && <span className={styles.divider} />}
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className={`${styles.scroll} ${loaded ? styles.loaded : ''}`}>
        {/* <span>SCROLL</span> */}
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
