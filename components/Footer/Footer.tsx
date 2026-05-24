import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.col}>
          <span className={styles.logo}>
            <span className={styles.logoWhite}>Creative</span> <span className={styles.logoGold}>Commune</span>
          </span>
          <p className={styles.tagline}>Digital marketing &amp; AI solutions for brands that demand excellence.</p>
          <a href="mailto:creativecommune.info@gmail.com" className={styles.email}>creativecommune.info@gmail.com</a>
        </div>
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Services</h4>
          <ul className={styles.list}>
            <li>Brand Strategy</li>
            <li>Social Media</li>
            <li>Performance Marketing</li>
            <li>AI Automation</li>
            <li>Web Design</li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Connect</h4>
          <a href="https://instagram.com/creativecommune_" target="_blank" rel="noopener noreferrer" className={styles.link}>@creativecommune_</a>
          <a href="#contact" className={styles.link}>Book a Call</a>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>&copy; {new Date().getFullYear()} Creative Commune. All rights reserved.</span>
        <span>Built for brands that dominate.</span>
      </div>
    </footer>
  );
}
