import { useEffect, useRef } from 'react'
import styles from './Contact.module.css'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/KadarlaManideep' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/manideep-kadarla-3829441a0' },
]

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add(styles.visible)
      },
      { threshold: 0.15 }
    )
    const el = sectionRef.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className={styles.section} ref={sectionRef}>
      <div className={styles.card}>
        <div className={styles.iconWrapper} aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </div>

        <p className={styles.label}>Get in Touch</p>
        <h2 className={styles.title}>Let&apos;s Work Together</h2>
        <p className={styles.subtitle}>
          Feel free to reach out for collaborations, job opportunities,
          or just a friendly hello. I&apos;ll get back to you as soon as possible!
        </p>

        <a href="mailto:manideepkadarla23@gmail.com" className={styles.email}>
          manideepkadarla23@gmail.com
        </a>

        <a href="mailto:manideepkadarla23@gmail.com" className={styles.cta}>
          Send Email <span className={styles.arrow}>→</span>
        </a>
      </div>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} Manideep Kadarla &mdash; Crafted with care
        </p>
        <nav className={styles.socials} aria-label="Social links">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              {label}
            </a>
          ))}
        </nav>
      </footer>
    </section>
  )
}
