const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconMenu(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  )
}

export function IconCheck(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  )
}

export function IconClose(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  )
}

export function IconWave(props) {
  return (
    <svg {...base} {...props}>
      <path d="M2 15c2-2.5 4-2.5 6 0s4 2.5 6 0 4-2.5 6-0.001 4 2.5 6 0" />
      <path d="M2 20c2-2.5 4-2.5 6 0s4 2.5 6 0 4-2.5 6-0.001 4 2.5 6 0" />
    </svg>
  )
}

export function IconSun(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v3M12 18.5v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2.5 12h3M18.5 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </svg>
  )
}

export function IconLeaf(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 19c9 1 14-4 14-14-10 0-15 5-14 14Z" />
      <path d="M5 19c3-5 6-8 12-11" />
    </svg>
  )
}

export function IconPin(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  )
}

export function IconBed(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 18v-7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3M3 18v2M21 18v2M21 18v-4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v3M3 14h18" />
    </svg>
  )
}

export function IconUsers(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.8 19c0-3.4 2.8-6 6.2-6s6.2 2.6 6.2 6" />
      <circle cx="17.5" cy="9" r="2.4" />
      <path d="M15 13.2c2.6.3 4.6 2.5 4.7 5.3" />
    </svg>
  )
}

export function IconWifi(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8.5a13 13 0 0 1 18 0M6 12a8.5 8.5 0 0 1 12 0M9.3 15.4a4.2 4.2 0 0 1 5.4 0" />
      <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconStar(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.8Z" />
    </svg>
  )
}

export function IconInstagram(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconFacebook(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14 21v-7h2.4l.4-3H14V9c0-.9.3-1.5 1.7-1.5H17V4.9C16.6 4.9 15.6 4.8 14.5 4.8c-2.3 0-3.9 1.4-3.9 4v2.2H8.2v3H10.6v7Z" />
    </svg>
  )
}

export function IconWhatsapp(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 17.5 4 20l2.6-.7A8.5 8.5 0 1 0 4 12a8.4 8.4 0 0 0 1.1 4.2Z" />
      <path d="M9 9.6c0 3.6 2.8 6.4 6.4 6.4.6 0 .9-.5.9-1v-.9c0-.3-.2-.5-.5-.6l-1.6-.5c-.3 0-.5 0-.7.2l-.4.5c-1.1-.5-2-1.4-2.5-2.5l.5-.4c.2-.2.3-.4.2-.7l-.5-1.6c0-.3-.3-.5-.6-.5H9.9c-.5 0-1 .3-1 .9Z" />
    </svg>
  )
}
