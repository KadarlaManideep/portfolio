import { useEffect, useRef } from 'react'
import styles from './Education.module.css'

const EDUCATION = [
  {
    degree: 'Master of Science',
    field: 'AI & Business Analytics',
    school: 'University of South Florida',
    location: 'Tampa, FL',
    period: 'Aug 2024 – May 2026',
    affiliation: null,
    courses: [
      'Artificial Intelligence & Machine Learning',
      'Database Management Systems',
      'Data Visualization',
      'Application Development',
      'Business Analytics & Data Science',
      'Project Management',
    ],
  },
  {
    degree: 'Bachelor of Technology',
    field: 'Electronics & Communication Engineering',
    school: 'Sreenidhi Institute of Science and Technology',
    location: 'Hyderabad, IN',
    period: '2018 – 2022',
    affiliation: null,
    courses: [
      'Computer Networks',
      'Analog Circuits',
      'Data Structures & Algorithms',
      'Software Engineering & Design Patterns',
    ],
  },
]

function EducationCard({ edu, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add(styles.cardVisible)
      },
      { threshold: 0.12 }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={styles.card}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Gradient top accent bar */}
      <div className={styles.accent} />

      <div className={styles.body}>
        {/* Degree + period */}
        <div className={styles.topRow}>
          <div>
            <p className={styles.degreeLabel}>{edu.degree}</p>
            <h3 className={styles.field}>{edu.field}</h3>
          </div>
          <span className={styles.period}>{edu.period}</span>
        </div>

        {/* School info */}
        <div className={styles.schoolBlock}>
          <p className={styles.school}>{edu.school}</p>
          <div className={styles.schoolMeta}>
            {edu.affiliation && (
              <span className={styles.affiliation}>{edu.affiliation}</span>
            )}
            <span className={styles.location}>{edu.location}</span>
          </div>
        </div>

        {/* Key coursework */}
        <ul className={styles.courses}>
          {edu.courses.map(c => (
            <li key={c} className={styles.course}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>Academic Background</p>
          <h2 className={styles.title}>Education</h2>
        </div>

        <div className={styles.grid}>
          {EDUCATION.map((edu, i) => (
            <EducationCard key={i} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
