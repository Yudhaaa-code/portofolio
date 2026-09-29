import { HeroBlock } from '@/components/ui/hero-block-shadcnui'
import profileImage from '../assets/1.jpg'
import { Github, Linkedin } from '@/components/ui/icons'

function Hero() {
  const socials = [
    { icon: Github, href: 'https://github.com/Yudhaaa-code' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/yudhaanangga/?trk=public-profile-join-page' },
  ]

  return (
    <HeroBlock
      id="beranda"
      name="Yudha Putra Anangga"
      avatarUrl={profileImage}
      contactHref="#kontak"
      projectsHref="#proyek"
      socials={socials}
    />
  )
}

export default Hero
