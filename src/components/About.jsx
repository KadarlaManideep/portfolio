import { useEffect, useRef } from 'react'
import styles from './About.module.css'
import profileImg from '../assets/profile.png'

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add(styles.visible)
      },
      { threshold: 0.12 }
    )
    const el = sectionRef.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>

        <div className={styles.imageCol}>
          <div className={styles.blob}>
          <img 
          src={profileImg}
          alt="Manideep Kadarla" 
          className={styles.photo}
          />
          </div>
        <div className={styles.blobGlow} aria-hidden="true" />
      </div>

        <div className={styles.textCol}>
          <p className={styles.label}>About Me</p>
          <h2 className={styles.name}>Manideep Kadarla</h2>
          <p className={styles.title}>Full Stack .NET Engineer</p>

          <p className={styles.bio}>
            Hi! I&apos;m Full Stack .NET Engineer with 4+ years of experience building
            scalable web applications. I specialize in C#, .NET Core, Angular, and
            React, delivering end-to-end solutions across financial services, healthcare,
            and enterprise domains.
          </p>
          <p className={styles.bio}>
            I recently completed my M.S. in AI &amp; Business Analytics 
            from the University of South Florida (May 2026), where I also served as a
            Graduate Teaching Assistant. Outside of work, I enjoy IPL cricket analytics
            and building tools that solve real problems.
          </p>

          <a href="#contact" className={styles.cta}>
            Get in Touch <span className={styles.arrow}>→</span>
          </a>
        </div>

      </div>
    </section>
  )
}
