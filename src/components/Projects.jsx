import { useEffect, useRef } from 'react'
import styles from './Projects.module.css'

const PROJECTS = [
  {
    title: 'CricMetrics',
    description:
      'IPL analytics dashboard built with React, TypeScript, and Vite featuring 10 pages of data visualizations, CSV-based data pipeline via PapaParse, Recharts charts, and an AI chatbot (CricBot) powered by the Anthropic API.',
    tags: ['React', 'TypeScript', 'Vite', 'Recharts', 'Anthropic API'],
    link: 'https://github.com/KadarlaManideep/cricmetrics',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    title: 'FairShare',
    description:
      'Full-stack group expense management app built with ASP.NET Core MVC and SQLite. Features CRUD operations, automated cost-splitting, live currency conversion via ExchangeRate API, Chart.js dashboards, and deployed on Azure App Service.',
    tags: ['ASP.NET Core', 'C#', 'EF Core', 'SQLite', 'Azure', 'Chart.js'],
    link: 'https://github.com/KadarlaManideep/FairShare-FinalProject',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    title: 'Crime Hotspot Analysis',
    description:
      'Machine learning pipeline on 836K+ U.S. crime records (2020–2024). Engineered cyclic temporal features and K-Means geospatial clusters. Benchmarked Logistic Regression, KNN, Random Forest, and XGBoost — selected Random Forest with F1 score of 84%.',
    tags: ['Python', 'Random Forest', 'XGBoost', 'SMOTE', 'K-Means', 'Jupyter'],
    link: 'https://github.com/KadarlaManideep/crime-hotspot-analysis',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
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
