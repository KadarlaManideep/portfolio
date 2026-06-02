import { useEffect, useRef } from 'react'
import styles from './Experience.module.css'

const EXPERIENCES = [
  {
    company: 'University of South Florida',
    role: 'Graduate Teaching Assistant',
    focus: 'AI & Analytics',
    period: 'Jan 2026 – May 2026',
    //location: 'Tampa, FL',
    description:
      'Designed AI agent workflows using Azure OpenAI and CrewAI Studio with RAG patterns and vector store integration. Supported 80+ graduate students on multi-agent pipeline design, achieving a 95%+ assignment pass rate.',
    tags: ['Azure OpenAI', 'CrewAI', 'RAG', 'Prompt Engineering', 'Python'],
  },
  {
    company: 'Raymond James Financial',
    role: 'Software Engineer Intern',
    focus: '.NET & Angular',
    period: 'Oct 2024 – Apr 2025',
    //location: 'St. Petersburg, FL',
    description:
      'Built .NET Core APIs and Angular front-end applications for financial data workflows, integrating 10+ third-party systems with sub-200ms response times. Implemented OAuth2/JWT auth and Oracle SQL stored procedures in a regulated Azure environment.',
    tags: ['.NET Core', 'Angular', 'C#', 'Oracle SQL', 'Azure', 'OAuth2'],
  },
  {
    company: 'Innova Solutions',
    role: 'Associate Software Engineer',
    focus: '.NET & React',
    period: 'Mar 2022 – Jul 2024',
    //location: 'Remote',
    description:
      'Engineered ASP.NET Core microservices for healthcare billing handling 1M+ subscribers, cutting billing runtime by 35%. Built React.js portals reducing customer support calls by 30% and optimized SQL queries cutting latency by 70%.',
    tags: ['ASP.NET Core', 'React', 'C#', 'SQL Server', 'Azure', 'Docker', 'Kafka'],
  },
  {
    company: 'Suvidha Solutions',
    role: 'Software Engineer Intern',
    focus: 'TalentX Platform',
    period: 'Jan 2021 – Sep 2021',
    //location: 'Hyderabad, IN',
    description:
      'Architected TalentX from scratch — an end-to-end enterprise hiring platform covering job postings, candidate tracking, and selection workflows with REST API integrations and T-SQL stored procedures.',
    tags: ['.NET', 'REST APIs', 'T-SQL', 'Linux'],
  },
]

function ExperienceCard({ exp, index }) {
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
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={styles.cardTop}>
        <div className={styles.cardInfo}>
          <h3 className={styles.role}>{exp.role}</h3>
          <p className={styles.company}>{exp.company}</p>
          <span className={styles.focus}>{exp.focus}</span>
        </div>
        <div className={styles.meta}>
          <span className={styles.period}>{exp.period}</span>
          <span className={styles.location}>{exp.location}</span>
        </div>
      </div>
      <p className={styles.description}>{exp.description}</p>
      <div className={styles.tags}>
        {exp.tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>Where I&apos;ve Worked</p>
          <h2 className={styles.title}>Work Experience</h2>
        </div>

        <div className={styles.timeline}>
          {EXPERIENCES.map((exp, i) => {
            const isRight = i % 2 !== 0
            return (
              <div key={i} className={styles.entry}>
                {/* Left slot */}
                <div className={styles.side}>
                  {!isRight && <ExperienceCard exp={exp} index={i} />}
                </div>

                {/* Center dot */}
                <div className={styles.connector}>
                  <div className={styles.dot} />
                </div>

                {/* Right slot */}
                <div className={styles.side}>
                  {isRight && <ExperienceCard exp={exp} index={i} />}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
