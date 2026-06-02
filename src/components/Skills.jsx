import styles from './Skills.module.css'

const ROWS = [
  {
    skills: ['C#', 'JavaScript', 'TypeScript', 'Python', 'Java', 'R', 'HTML5', 'CSS3'],
    duration: '28s',
  },
  {
    skills: ['React JS', 'Angular', 'Next.js', 'Node.js', 'ASP.NET MVC', '.NET Core', 'Blazor', 'Material UI'],
    duration: '34s',
    reverse: true,
  },
  {
    skills: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Oracle SQL', 'MySQL', 'Redis', 'Cosmos DB', 'Snowflake'],
    duration: '30s',
  },
  {
    skills: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'Kafka', 'Git', 'CI/CD', 'GitHub Copilot'],
    duration: '36s',
    reverse: true,
  },
  {
    skills: ['Generative AI', 'LLMs', 'RAG Patterns', 'Azure AI Foundry', 'CrewAI Studio', 'Azure OpenAI', 'Prompt Engineering', 'Agentic Workflows'],
    duration: '32s',
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>What I Work With</p>
        <h2 className={styles.title}>Skills &amp; Technologies</h2>
      </div>

      <div className={styles.marqueeContainer}>
        {ROWS.map((row, i) => (
          <div key={i} className={styles.marqueeRow}>
            <div
              className={`${styles.track} ${row.reverse ? styles.reverse : ''}`}
              style={{ animationDuration: row.duration }}
            >
              {/* Duplicate for seamless loop */}
              {[...row.skills, ...row.skills].map((skill, j) => (
                <div
                  key={j}
                  className={styles.pill}
                  aria-hidden={j >= row.skills.length ? 'true' : undefined}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
