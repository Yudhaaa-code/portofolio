import { useState } from 'react'
import { Link } from 'react-router-dom'
import { usePdfModal } from '../context/PdfModalContext'
import { useLanguage } from '../context/LanguageContext'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { openPreview } = usePdfModal()
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { name: t('nav.home'), to: '/#beranda' },
    { name: t('nav.about'), to: '/#tentang' },
    { name: t('nav.skills'), to: '/#keahlian' },
    { name: t('nav.projects'), to: '/#proyek' },
    { name: t('nav.contact'), to: '/#kontak' },
  ]

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          Yudha Putra Anangga<span>.</span>
        </Link>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to} className="nav-item">
              <Link
                to={link.to}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li className="nav-item">
            <button
              type="button"
              className="nav-link-deck cursor-pointer"
              onClick={() => {
                setIsOpen(false)
                openPreview()
              }}
              title={t('hero.previewPdf')}
            >
              {t('nav.pdfDeck')}
            </button>
          </li>

          {/* Language Switcher Pill */}
          <li className="nav-item lang-item">
            <div className="lang-switcher" role="group" aria-label="Language Selector">
              <button
                type="button"
                className={`lang-btn ${language === 'id' ? 'active' : ''}`}
                onClick={() => setLanguage('id')}
                title="Bahasa Indonesia"
              >
                ID
              </button>
              <span className="lang-divider">|</span>
              <button
                type="button"
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
                title="English"
              >
                EN
              </button>
            </div>
          </li>
        </ul>

        <div className="nav-right-mobile">
          {/* Mobile direct language switch */}
          <div className="lang-switcher mobile-switcher" role="group" aria-label="Language Selector">
            <button
              type="button"
              className={`lang-btn ${language === 'id' ? 'active' : ''}`}
              onClick={() => setLanguage('id')}
            >
              ID
            </button>
            <span className="lang-divider">|</span>
            <button
              type="button"
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>

          <div
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
