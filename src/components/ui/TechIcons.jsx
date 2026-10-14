import mariadbLogo from '../../assets/mariadb-logo.png'

export function ReactIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  )
}

export function NextjsIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 180 180" className={className} fill="none">
      <circle cx="90" cy="90" r="90" fill="#000000" stroke="#334155" strokeWidth="4" />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.168 149.508 157.52Z"
        fill="url(#next-gradient)"
      />
      <rect x="115" y="54" width="12" height="72" fill="url(#next-gradient-2)" />
      <defs>
        <linearGradient id="next-gradient" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="next-gradient-2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function JavaScriptIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect width="64" height="64" rx="8" fill="#F7DF1E" />
      <path
        d="M21.5 49c-3.8 0-6.4-2.1-7.7-4.6l5.2-3.2c.9 1.5 2 2.6 3.7 2.6 1.8 0 3-.7 3-2.8V26.2h6.4v14.9c0 5-3 7.9-10.6 7.9zm24.7 0c-7.2 0-11.8-3.7-11.8-9.4 0-5.3 4.1-8.3 9.4-10.4l1.8-.7c2.6-1 4.2-1.9 4.2-3.6 0-1.5-1.2-2.5-3.3-2.5-2.2 0-3.6 1.1-4.7 2.8l-5.1-3.3c2.1-3.6 5.5-5.3 10-5.3 5.9 0 9.7 3.3 9.7 8.5 0 5-3.4 7.6-8.5 9.7l-1.9.8c-2.8 1.1-4.4 2-4.4 3.9 0 1.6 1.4 2.7 3.8 2.7 2.7 0 4.4-1.3 5.6-3.1l5 3.3c-1.9 3.9-5.7 6.7-9.8 6.7z"
        fill="#000000"
      />
    </svg>
  )
}

export function TypeScriptIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect width="64" height="64" rx="8" fill="#3178C6" />
      <path
        d="M32.5 25.5h-18v6.2h5.8v22h6.4v-22h5.8v-6.2zm14.8 15.6c2.6-1 4.2-1.9 4.2-3.6 0-1.5-1.2-2.5-3.3-2.5-2.2 0-3.6 1.1-4.7 2.8l-5.1-3.3c2.1-3.6 5.5-5.3 10-5.3 5.9 0 9.7 3.3 9.7 8.5 0 5-3.4 7.6-8.5 9.7l-1.9.8c-2.8 1.1-4.4 2-4.4 3.9 0 1.6 1.4 2.7 3.8 2.7 2.7 0 4.4-1.3 5.6-3.1l5 3.3c-1.9 3.9-5.7 6.7-9.8 6.7-7.2 0-11.8-3.7-11.8-9.4 0-5.3 4.1-8.3 9.4-10.4l1.9-.7z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

export function NodejsIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <path
        d="M32 5.5L8.5 19v26L32 58.5l23.5-13.5V19L32 5.5z"
        fill="#339933"
      />
      <path
        d="M32 15.5l14 8.1v16.2L32 48l-14-8.2V23.6l14-8.1z"
        fill="#FFFFFF"
        opacity="0.15"
      />
      <path
        d="M32 22a4 4 0 0 1 4 4v12a4 4 0 0 1-8 0V26a4 4 0 0 1 4-4z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

export function TailwindIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <path
        d="M16 32c2.4-8 8.8-12 19.2-12 14.4 0 18.4 9.6 24 10.4C63.2 31 65 29 65 29s-2.4 8-8.8 12c-14.4 0-18.4-9.6-24-10.4C28 30 25 32 16 32zm-16 16c2.4-8 8.8-12 19.2-12 14.4 0 18.4 9.6 24 10.4C47.2 47 49 45 49 45s-2.4 8-8.8 12c-14.4 0-18.4-9.6-24-10.4C12 46 9 48 0 48z"
        fill="#06B6D4"
      />
    </svg>
  )
}

export function PrismaIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <path
        d="M51.2 50.4L33.7 8.2c-.7-1.6-3-1.6-3.7 0L12.4 50.4c-.6 1.4.5 3 2 3h34.8c1.5 0 2.6-1.6 2-3z"
        fill="#16A34A"
        opacity="0.2"
      />
      <path
        d="M32 9.5l17.5 39.5H14.5L32 9.5z"
        stroke="#2DD4BF"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path d="M32 9.5v39.5" stroke="#2DD4BF" strokeWidth="2.5" />
    </svg>
  )
}

export function PostgreSqlIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <circle cx="32" cy="32" r="28" fill="#336791" />
      <path
        d="M20 24c0-4.4 5.4-8 12-8s12 3.6 12 8v16c0 4.4-5.4 8-12 8s-12-3.6-12-8V24z"
        stroke="#FFFFFF"
        strokeWidth="3"
        fill="none"
      />
      <path d="M20 32c0 4.4 5.4 8 12 8s12-3.6 12-8" stroke="#FFFFFF" strokeWidth="3" />
      <path d="M20 40c0 4.4 5.4 8 12 8s12-3.6 12-8" stroke="#FFFFFF" strokeWidth="3" />
    </svg>
  )
}

export function MariaDbIcon({ className = "skill-img-icon" }) {
  return (
    <img
      src={mariadbLogo}
      alt="MariaDB Logo"
      className={className}
    />
  )
}

export function GitIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <path
        d="M58.7 28.5L35.5 5.3a4.7 4.7 0 0 0-6.6 0L22.4 12l8.3 8.3a5.5 5.5 0 0 1 7 7.1l8 8a5.5 5.5 0 1 1-3.3 3.3l-7.7-7.7v15.2a5.5 5.5 0 1 1-4.7 0V31a5.6 5.6 0 0 1-3-4.9c0-.8.2-1.5.5-2.2L19.4 15 5.3 29.1a4.7 4.7 0 0 0 0 6.6l23.2 23.2a4.7 4.7 0 0 0 6.6 0l23.6-23.8a4.7 4.7 0 0 0 0-6.6z"
        fill="#F05032"
      />
    </svg>
  )
}
