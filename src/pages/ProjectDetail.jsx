import { useParams, Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  UserCheck, 
  Calendar,
  ArrowRight 
} from 'lucide-react'
import { Github } from '../components/ui/icons'
import projects from '../data/projects'
import { useLanguage } from '../context/LanguageContext'
import { ProjectCover } from '../components/ui/ProjectCover'

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
          <Link to="/#proyek" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <ArrowLeft size={18} />
            <span>{t('projects.backToProjects')}</span>
          </Link>
        </div>
      </section>
    )
  }

  const otherProjects = projects.filter((p) => p.id !== id).slice(0, 3)
  const featuresList = getFeatures(project.features)
  const hasVercel = project.badge === 'Vercel' || project.demoLink?.includes('vercel.app')
  const hasLiveDemo = project.demoLink && project.demoLink !== '' && project.demoLink !== '#'
  const category = getLocalized(project.category)
  const role = getLocalized(project.role)

  return (
    <section className="project-detail section" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="container">
        {/* Dynamic Contrast Back Navigation */}
        <div className="back-nav-container">
          <Link to="/#proyek" className="back-btn-pill">
            <ArrowLeft size={16} />
            <span>{t('projects.backToList')}</span>
          </Link>
        </div>

        {/* Detail Header Hero */}
        <div className="detail-header">
          <div className="detail-image-wrapper">
            <ProjectCover projectId={project.id} size="detail" />
          </div>

          <div className="detail-meta">
            {/* Trust & Category Badges Bar */}
            <div className="detail-trust-bar">
              <span className="trust-pill status-ready">
                <span className="live-status-dot"></span>
                <span>{t('projects.verifiedProduction')}</span>
              </span>

              {category && (
                <span className="trust-pill category-pill">
                  <Layers size={13} />
                  <span>{category}</span>
                </span>
              )}

              {role && (
                <span className="trust-pill role-pill">
                  <UserCheck size={13} />
                  <span>{role}</span>
                </span>
              )}

              {project.year && (
                <span className="trust-pill year-pill">
                  <Calendar size={13} />
                  <span>{project.year}</span>
                </span>
              )}
            </div>

            <h1 className="detail-title">{getLocalized(project.title)}</h1>
            <p className="detail-desc">{getLocalized(project.fullDesc)}</p>

            <div className="project-tags" style={{ marginBottom: '1.75rem' }}>
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="detail-actions">
              {hasLiveDemo && (
                <a
                  href={project.demoLink}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
                >
                  <ExternalLink size={18} />
                  <span>{project.demoLink.includes('vercel.app') ? t('projects.demoVercel') : t('projects.liveDemo')}</span>
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
                >
                  <Github size={18} />
                  <span>{t('projects.sourceCode')}</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Section Cards: Features & Tech Stack */}
        <div className="detail-sections">
          <div className="detail-section-card">
            <div className="section-card-title">
              <span className="section-icon-badge">
                <Sparkles size={18} />
              </span>
              <h2>{t('projects.keyFeatures')}</h2>
            </div>
            <ul className="feature-list">
              {featuresList.map((f, i) => (
                <li key={i}>
                  <CheckCircle2 size={18} className="check-icon-lucide" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-section-card">
            <div className="section-card-title">
              <span className="section-icon-badge">
                <Cpu size={18} />
              </span>
              <h2>{t('projects.techUsed')}</h2>
            </div>
            <div className="tech-list">
              {project.techUsed.map((item) => (
                <span key={item} className="tech-badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="detail-section-card">
          <div className="section-card-title">
            <span className="section-icon-badge">
              <Layers size={18} />
            </span>
            <h2>{t('projects.gallery')}</h2>
          </div>
          <div className="gallery-grid">
            {project.gallery.map((g, i) => (
              <div key={i} className="gallery-item">
                <span>{g}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="other-projects">
            <div className="section-card-title" style={{ justifyContent: 'center', marginBottom: '2.5rem' }}>
              <span className="section-icon-badge">
                <Layers size={20} />
              </span>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>{t('projects.otherProjects')}</h2>
            </div>
            <div className="projects-grid">
              {otherProjects.map((p) => {
                const isOtherVercel = p.badge === 'Vercel' || p.demoLink?.includes('vercel.app')
                const isOtherLive = p.demoLink && p.demoLink !== '' && p.demoLink !== '#'
                const otherCategory = getLocalized(p.category)

                return (
                  <Link key={p.id} to={`/project/${p.id}`} className="project-card group">
                    <div className="project-image-wrapper">
                      <ProjectCover projectId={p.id} size="card" />
                      <div className="project-overlay-badges">
                        {isOtherVercel && (
                          <span className="project-badge vercel-badge" title={t('projects.deployedOnVercel')}>
                            <span className="vercel-triangle">▲</span> Vercel
                          </span>
                        )}
                        {isOtherLive && (
                          <span className="project-live-indicator">
                            <span className="live-status-dot"></span>
                            <span>Live</span>
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="project-content">
                      {otherCategory && <span className="project-category-chip">{otherCategory}</span>}
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
        )}
      </div>

      {/* Sticky Bottom Action Bar (Rule 6: Sticky CTA) */}
      <div className="detail-sticky-bar">
        <div className="detail-sticky-inner">
          <div className="sticky-info">
            <span className="sticky-thumb">{project.image}</span>
            <div className="sticky-text">
              <span className="sticky-title">{getLocalized(project.title)}</span>
              <span className="sticky-sub">
                <ShieldCheck size={13} className="text-emerald-400" />
                <span>{t('projects.verifiedProduction')}</span>
              </span>
            </div>
          </div>
          <div className="sticky-actions">
            {hasLiveDemo && (
              <a
                href={project.demoLink}
                className="btn btn-primary sticky-btn"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={15} />
                <span>{t('projects.liveDemo')}</span>
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                className="btn btn-secondary sticky-btn"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={15} />
                <span>{t('projects.sourceCode')}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail
