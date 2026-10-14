import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import projects from '../data/projects'
import { useLanguage } from '../context/LanguageContext'
import { ProjectCover } from './ui/ProjectCover'

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
            const category = getLocalized(project.category)

            return (
              <Link key={project.id} to={`/project/${project.id}`} className="project-card group">
                <div className="project-image-wrapper">
                  <ProjectCover projectId={project.id} size="card" />
                  <div className="project-overlay-badges">
                    {hasVercel && (
                      <span className="project-badge vercel-badge" title={t('projects.deployedOnVercel')}>
                        <span className="vercel-triangle">▲</span> Vercel
                      </span>
                    )}
                    {hasLiveDemo && (
                      <span className="project-live-indicator">
                        <span className="live-status-dot"></span>
                        <span>Live</span>
                      </span>
                    )}
                  </div>
                </div>
                <div className="project-content">
                  {category && <span className="project-category-chip">{category}</span>}
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
                    <span className="project-link">
                      <span>{t('projects.viewDetails')}</span>
                      <ArrowRight size={16} className="inline-icon arrow-slide" />
                    </span>
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
