'use client';
import { useScrolled } from '@/hooks/useScrolled';
import styles from './Navbar.module.css';

export default function Navbar() {
  const scrolled = useScrolled();

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo}>
        <span className={styles.logoWhite}>Creative</span>
        <span className={styles.logoGold}>Commune</span>
      </a>
      <ul className={styles.links}>
        <li><a href="#services">Services</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#contact" className={styles.cta}>Book a Call</a>
    </nav>
  );
}
