import { useLanguage } from '../context/LanguageContext'

function Footer() {
  const { t } = useLanguage()

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/Yudhaaa-code' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/yudhaanangga/?trk=public-profile-join-page' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Yudha Putra Anangga<span>.</span></h3>
            <p>{t('footer.brandDesc')}</p>
          </div>
          <div className="footer-social">
            <h4>{t('footer.followMe')}</h4>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Yudha Putra Anangga. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
