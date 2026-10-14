import { useLanguage } from '../context/LanguageContext'
import {
  ReactIcon,
  NextjsIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  NodejsIcon,
  TailwindIcon,
  PrismaIcon,
  PostgreSqlIcon,
  MariaDbIcon,
  GitIcon,
} from './ui/TechIcons'

function Skills() {
  const { t } = useLanguage()

  const skills = [
    { name: 'Next.js', category: 'Framework', icon: <NextjsIcon /> },
    { name: 'React 19', category: 'Frontend', icon: <ReactIcon /> },
    { name: 'TypeScript', category: 'Language', icon: <TypeScriptIcon /> },
    { name: 'JavaScript (ES6+)', category: 'Language', icon: <JavaScriptIcon /> },
    { name: 'Tailwind CSS', category: 'Styling', icon: <TailwindIcon /> },
    { name: 'Node.js', category: 'Backend', icon: <NodejsIcon /> },
    { name: 'Prisma ORM', category: 'Database', icon: <PrismaIcon /> },
    { name: 'PostgreSQL', category: 'Database', icon: <PostgreSqlIcon /> },
    { name: 'MariaDB / MySQL', category: 'Database', icon: <MariaDbIcon /> },
    { name: 'Git & GitHub', category: 'Tooling', icon: <GitIcon /> },
  ]

  return (
    <section id="keahlian" className="skills section">
      <div className="container">
        <h2 className="section-title">{t('skills.title')}</h2>
        <div className="section-divider"></div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card group">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <span className="skill-category-badge">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
