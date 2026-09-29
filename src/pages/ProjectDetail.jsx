import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects'
import { useLanguage } from '../context/LanguageContext'

function ProjectDetail() {
  const { id } = useParams()
  const { language, t } = useLanguage()
  const project = projects.find((p) => p.id === id)

  const getLocalized = (field) => {
    if (!field) return ''
    if (typeof field === 'object' && !Array.isArray(field)) {
      return field[language] || field.id || ''
    }
    return field
  }

  const getFeatures = (field) => {
    if (!field) return []
    if (typeof field === 'object' && !Array.isArray(field)) {
      return field[language] || field.id || []
    }
    return Array.isArray(field) ? field : []
  }

  if (!project) {
    return (
      <section className="section" style={{ minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '120px' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 className="section-title">{t('projects.notFound')}</h1>
          <Link to="/#proyek" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
            {t('projects.backToProjects')}
          </Link>
        </div>
      </section>
    )
  }

  const otherProjects = projects.filter((p) => p.id !== id).slice(0, 3)
  const featuresList = getFeatures(project.features)
  const hasVercel = project.badge === 'Vercel' || project.demoLink?.includes('vercel.app')
  const hasLiveDemo = project.demoLink && project.demoLink !== '' && project.demoLink !== '#'

  return (
    <section className="project-detail section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <Link to="/#proyek" className="back-btn">
          {t('projects.backToList')}
        </Link>

        <div className="detail-header">
          <div className="detail-image" style={{ position: 'relative' }}>
            <span>{project.image}</span>
            {hasVercel && (
              <span className="project-badge vercel-badge" title={t('projects.deployedOnVercel')}>
                <span className="vercel-triangle">▲</span> {t('projects.deployedOnVercel')}
              </span>
            )}
          </div>
          <div className="detail-meta">
            <div className="project-tags" style={{ marginBottom: '1rem' }}>
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="detail-title">{getLocalized(project.title)}</h1>
            <p className="detail-desc">{getLocalized(project.fullDesc)}</p>
            <div className="detail-actions">
              {hasLiveDemo && (
                <a
                  href={project.demoLink}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  {project.demoLink.includes('vercel.app') ? (
                    <>
                      <span className="vercel-triangle">▲</span>
                      <span>{t('projects.demoVercel')}</span>
                    </>
                  ) : (
                    <span>{t('projects.liveDemo')}</span>
                  )}
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <span>{t('projects.sourceCode')}</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="detail-sections">
          <div className="detail-section-card">
            <h2>{t('projects.keyFeatures')}</h2>
            <ul className="feature-list">
              {featuresList.map((f, i) => (
                <li key={i}>
                  <span className="check-icon">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-section-card">
            <h2>{t('projects.techUsed')}</h2>
            <div className="tech-list">
              {project.techUsed.map((item) => (
                <span key={item} className="tech-badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="detail-section-card">
          <h2>{t('projects.gallery')}</h2>
          <div className="gallery-grid">
            {project.gallery.map((g, i) => (
              <div key={i} className="gallery-item">
                <span>{g}</span>
              </div>
            ))}
          </div>
        </div>

        {otherProjects.length > 0 && (
          <div className="other-projects">
            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>🔍 {t('projects.otherProjects')}</h2>
            <div className="projects-grid">
              {otherProjects.map((p) => {
                const isOtherVercel = p.badge === 'Vercel' || p.demoLink?.includes('vercel.app')
                const isOtherLive = p.demoLink && p.demoLink !== '' && p.demoLink !== '#'

                return (
                  <Link key={p.id} to={`/project/${p.id}`} className="project-card">
                    <div className="project-image">
                      <span>{p.image}</span>
                      {isOtherVercel && (
                        <span className="project-badge vercel-badge" title={t('projects.deployedOnVercel')}>
                          <span className="vercel-triangle">▲</span> Vercel
                        </span>
                      )}
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">{getLocalized(p.title)}</h3>
                      <p className="project-description">{getLocalized(p.shortDesc)}</p>
                      <div className="project-tags">
                        {p.tags.map((tag) => (
                          <span key={tag} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="project-card-footer">
                        <span className="project-link">{t('projects.viewDetails')}</span>
                        {isOtherLive && (
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
        )}
      </div>
    </section>
  )
}

export default ProjectDetail
