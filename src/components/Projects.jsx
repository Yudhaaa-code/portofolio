import { Link } from 'react-router-dom'
import projects from '../data/projects'
import { useLanguage } from '../context/LanguageContext'

function Projects() {
  const { language, t } = useLanguage()

  const getLocalized = (field) => {
    if (!field) return ''
    if (typeof field === 'object' && !Array.isArray(field)) {
      return field[language] || field.id || ''
    }
    return field
  }

  return (
    <section id="proyek" className="projects section">
      <div className="container">
        <h2 className="section-title">{t('projects.title')}</h2>
        <div className="section-divider"></div>
        <div className="projects-grid">
          {projects.map((project) => {
            const hasVercel = project.badge === 'Vercel' || project.demoLink?.includes('vercel.app')
            const hasLiveDemo = project.demoLink && project.demoLink !== '' && project.demoLink !== '#'

            return (
              <Link key={project.id} to={`/project/${project.id}`} className="project-card">
                <div className="project-image">
                  <span>{project.image}</span>
                  {hasVercel && (
                    <span className="project-badge vercel-badge" title={t('projects.deployedOnVercel')}>
                      <span className="vercel-triangle">▲</span> Vercel
                    </span>
                  )}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{getLocalized(project.title)}</h3>
                  <p className="project-description">{getLocalized(project.shortDesc)}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-card-footer">
                    <span className="project-link">{t('projects.viewDetails')}</span>
                    {hasLiveDemo && (
                      <span className="live-status-pill">
                        <span className="live-status-dot"></span>
                        Live
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
