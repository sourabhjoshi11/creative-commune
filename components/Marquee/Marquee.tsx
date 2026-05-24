import { MARQUEE_ITEMS } from '@/lib/data';
import styles from './Marquee.module.css';

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className={styles.marquee} role="marquee" aria-label="Services ticker">
      <div className={styles.track}>
        {items.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.star}>✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
