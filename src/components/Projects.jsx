import { useEffect, useRef } from 'react'
import styles from './Projects.module.css'

const PROJECTS = [
  {
    title: 'AI ChatBot Web App',
    description:
      'A conversational AI assistant powered by a large language model. Features context-aware responses, streaming output, and a clean chat UI.',
    tags: ['React', 'Node.js', 'REST API', 'TypeScript'],
    link: '#',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    title: 'Traffic Sign Detection',
    description:
      'Deep learning model using CNN and Keras for classifying traffic signs. Achieved 97% accuracy on the GTSRB benchmark dataset.',
    tags: ['Python', 'TensorFlow', 'Keras', 'AWS'],
    link: '#',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    title: 'Data Engineering Pipeline',
    description:
      'Real-time data ingestion and analytics platform processing millions of events per day with sub-second latency and Power BI dashboards.',
    tags: ['Kafka', 'Spark', 'PostgreSQL', 'Docker'],
    link: '#',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    title: 'Movie Ticket Booking',
    description:
      'Real-time ticket booking system with seat selection, payment processing via Stripe, and live availability updates using WebSockets.',
    tags: ['Django', 'React', 'Firebase', 'Stripe'],
    link: '#',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    title: 'E-Commerce Backend',
    description:
      'Scalable backend API for an e-commerce platform with product catalog, order management, and inventory tracking built with Spring Boot.',
    tags: ['Spring Boot', 'Java', 'PostgreSQL', 'Docker'],
    link: '#',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    title: 'E-Learning Platform',
    description:
      'A responsive e-learning website with course listings, video playback, progress tracking, and a student dashboard.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    link: '#',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add(styles.cardVisible)
      },
      { threshold: 0.1 }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={ref}
      className={styles.card}
      style={{ transitionDelay: `${(index % 3) * 0.12}s` }}
    >
      <div className={styles.cardImage} style={{ background: project.gradient }}>
        <div className={styles.cardImageOverlay} />
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>

        <div className={styles.tags}>
          {project.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>

        <a
          href={project.link}
          className={styles.viewBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project <span className={styles.viewArrow}>→</span>
        </a>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>What I&apos;ve Built</p>
          <h2 className={styles.title}>Featured Projects</h2>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
