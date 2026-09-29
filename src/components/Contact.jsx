import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function Contact() {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setStatusMessage('')

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    // Jika access key belum diisi di .env
    if (!accessKey) {
      // Buka Gmail Compose langsung sebagai fallback instan
      const subject = encodeURIComponent(`Pesan dari ${formData.name} (Portofolio)`)
      const body = encodeURIComponent(`Halo Yudha,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`)
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=yuda99354@gmail.com&su=${subject}&body=${body}`
      
      window.open(gmailUrl, '_blank')
      setStatus('success')
      setStatusMessage(t('contact.fallbackMsg'))
      setFormData({ name: '', email: '', message: '' })
      return
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio: Pesan Baru dari ${formData.name}`,
          from_name: `${formData.name} via Portofolio`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setStatusMessage(t('contact.successMsg'))
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error(result.message || 'Gagal mengirim pesan.')
      }
    } catch (err) {
      setStatus('error')
      setStatusMessage(err.message || t('contact.errorMsg'))
    }
  }

  const contactInfo = [
    { 
      icon: '📧', 
      label: t('contact.labels.email'), 
      value: 'yuda99354@gmail.com',
      href: 'mailto:yuda99354@gmail.com',
    },
    { 
      icon: '📱', 
      label: t('contact.labels.phone'), 
      value: '+62 895 3643 58323',
      href: 'https://wa.me/62895364358323',
    },
    { 
      icon: '📍', 
      label: t('contact.labels.location'), 
      value: t('contact.labels.locationVal'),
      href: null,
    },
    { 
      icon: '💼', 
      label: t('contact.labels.linkedin'), 
      value: 'linkedin.com/in/yudhaanangga',
      href: 'https://www.linkedin.com/in/yudhaanangga/?trk=public-profile-join-page',
    },
  ]

  return (
    <section id="kontak" className="contact section">
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
        <div className="section-divider"></div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>{t('contact.infoTitle')}</h3>
            <p className="contact-desc">
              {t('contact.infoDesc')}
            </p>
            <ul className="contact-list">
              {contactInfo.map((item) => (
                <li key={item.label} className="contact-item">
                  <span className="contact-icon">{item.icon}</span>
                  <div>
                    <h4>{item.label}</h4>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-emerald-400 transition-colors"
                        style={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>{t('contact.formTitle')}</h3>
            <div className="form-group">
              <label htmlFor="name">{t('contact.nameLabel')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.namePlaceholder')}
                required
                disabled={status === 'loading'}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('contact.emailLabel')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.emailPlaceholder')}
                required
                disabled={status === 'loading'}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact.messageLabel')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.messagePlaceholder')}
                rows="5"
                required
                disabled={status === 'loading'}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="btn btn-primary btn-block"
              disabled={status === 'loading'}
              style={{
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                opacity: status === 'loading' ? 0.7 : 1,
              }}
            >
              {status === 'loading' ? t('contact.sendingButton') : t('contact.sendButton')}
            </button>

            {status === 'success' && (
              <div className="form-success">
                {statusMessage}
              </div>
            )}

            {status === 'error' && (
              <div className="form-error">
                <p>{statusMessage}</p>
                <a
                  href={`mailto:yuda99354@gmail.com?subject=Pesan dari ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`}
                  className="inline-block mt-2 text-xs font-semibold text-emerald-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('contact.manualGmail')}
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
