import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

const ROLES = [
  'Software Engineer',
  '.Net Developer',
  'Full Stack Developer',
  'Frontend Developer',
  'Problem Solver',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const role = ROLES[roleIndex]
    let timeout

    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section id="hero" className={styles.hero}>
      {/* Decorative blobs */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.greeting}>Hi, I&apos;m</p>
        <h1 className={styles.name}>Manideep Kadarla</h1>

        <div className={styles.roleWrapper} aria-live="polite">
          <span className={styles.role}>{displayed}</span>
          <span className={styles.cursor} aria-hidden="true">|</span>
        </div>

        <p className={styles.tagline}>
          Full Stack .NET Developer with 4+ years of experience building scalable web apps - M.S.in Artificial Intelligence & Business Analytics from USF.
        </p>

        <div className={styles.actions}>
          <a
            href="https://github.com/KadarlaManideep"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/manideep-kadarla-3829441a0"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnSecondary}`}
          >
            LinkedIn
          </a>
          <a
            href="/Manideep_Kadarla_Resume.pdf"
            download="Manideep_Kadarla_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnSecondary}`}
          >
            ↓ Resume
          </a>
        </div>
      </div>
    </section>
  )
}
