'use client';
import { useState, FormEvent } from 'react';
import { SERVICE_OPTIONS } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import styles from './Contact.module.css';

export default function Contact() {
  const [ref, inView] = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: ''
  });

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '',
        subject: `New Inquiry from ${form.name} — Creative Commune`,
        from_name: 'Creative Commune Website',
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        service: form.service,
        message: form.message,
      }),
    });

    if (res.ok) setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className={`${styles.section} ${styles.visible}`}>
        <div className={styles.success}>
          <span className={styles.successIcon}>✦</span>
          <h3>Message Received</h3>
          <p>Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className={`${styles.section} ${inView ? styles.visible : ''}`} ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.glow} />
      <div className={styles.container}>
        <span className={styles.label}>Get In Touch</span>
        <h2 className={styles.heading}>Let&apos;s Build Something Extraordinary</h2>
        <p className={styles.sub}>Tell us about your brand and goals. We&apos;ll craft a strategy that delivers.</p>

        {/* <div className={styles.tabs}>
          <button className={`${styles.tab} ${!showCalendly ? styles.tabActive : ''}`} onClick={() => setShowCalendly(false)}>Send a Message</button>
          <button className={`${styles.tab} ${showCalendly ? styles.tabActive : ''}`} onClick={() => setShowCalendly(true)}>Schedule a Call</button>
        </div> */}

        {/* {!showCalendly ? (
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.row}>
              <input type="text" placeholder="Name *" value={form.name} onChange={update('name')} required className={styles.input} />
              <input type="email" placeholder="Email *" value={form.email} onChange={update('email')} required className={styles.input} />
            </div>
            <div className={styles.row}>
              <input type="tel" placeholder="Phone" value={form.phone} onChange={update('phone')} className={styles.input} />
              <input type="text" placeholder="Company" value={form.company} onChange={update('company')} className={styles.input} />
            </div>
            <select value={form.service} onChange={update('service')} className={styles.input}>
              <option value="">Select Service</option>
              {SERVICE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <textarea placeholder="Description" value={form.message} onChange={update('message')} rows={4} className={styles.input} />
            <button type="submit" className={styles.submit}>Send Message</button>
          </form>
        ) : ( */}
          <div className={styles.calendly}>
            <iframe
              src={`${process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com'}?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=c9a84c`}
              width="100%"
              height="650"
              frameBorder="0"
              title="Schedule a call with Creative Commune"
            />
          </div>
        {/* )} */}
      </div>
    </section>
  );
}
