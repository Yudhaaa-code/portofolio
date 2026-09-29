import { useLanguage } from '../context/LanguageContext'
import mariadbLogo from '../assets/mariadb-logo.png'

function Skills() {
  const { t } = useLanguage()

  const skills = [
    { name: 'React JS', icon: '⚛️' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'HTML & CSS', icon: '🎨' },
    { name: 'Tailwind CSS', icon: '🌊' },
    {
      name: 'MariaDB',
      icon: (
        <img
          src={mariadbLogo}
          alt="MariaDB Logo"
          className="skill-img-icon"
        />
      ),
    },
    { name: 'MySQL', icon: '🐬' },
    { name: 'Git & GitHub', icon: '🐙' },
  ]

  return (
    <section id="keahlian" className="skills section">
      <div className="container">
        <h2 className="section-title">{t('skills.title')}</h2>
        <div className="section-divider"></div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
