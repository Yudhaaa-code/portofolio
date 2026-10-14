import { useLanguage } from '../context/LanguageContext'

function About() {
  const { t } = useLanguage()

  return (
    <section id="tentang" className="about section">
      <div className="container">
        <h2 className="section-title">{t('about.title')}</h2>
        <div className="section-divider"></div>
        <div className="about-content">
          <div className="about-text">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <div className="about-info">
              <div className="info-item">
                <h4>{t('about.stats.projects.num')}</h4>
                <p>{t('about.stats.projects.label')}</p>
              </div>
              <div className="info-item">
                <h4>{t('about.stats.production.num')}</h4>
                <p>{t('about.stats.production.label')}</p>
              </div>
              <div className="info-item">
                <h4>{t('about.stats.experience.num')}</h4>
                <p>{t('about.stats.experience.label')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
