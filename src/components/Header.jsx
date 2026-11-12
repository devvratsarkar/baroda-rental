import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { COMPANY } from '../data/content'

const LINKS = [
  ['/', 'Home'],
  ['/properties', 'Properties'],
  ['/about', 'About'],
  ['/services/rental-property', 'Services'],
  ['/testimonials', 'Testimonials'],
  ['/contact', 'Contact'],
]

export default function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const home = pathname === '/'

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const transparent = home && !solid && !open

  return (
    <header className={transparent ? 'site-header is-transparent' : 'site-header'}>
      <div className="header-bar">
        <button
          className={open ? 'menu-toggle is-open' : 'menu-toggle'}
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={COMPANY.logo} alt="Baroda Realtor" />
        </NavLink>

        <nav className="desktop-nav" aria-label="Primary">
          {LINKS.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={COMPANY.phoneHref}>{COMPANY.phone}</a>
        </div>

        <a className="header-call" href={COMPANY.phoneHref} aria-label={`Call ${COMPANY.phone}`}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7.2 3.8c.4-.4 1-.5 1.5-.3l2.2.9c.5.2.8.7.8 1.2l-.2 2.4c0 .4-.2.8-.6 1l-1.3.7a12.4 12.4 0 0 0 5.5 5.5l.7-1.3c.2-.4.6-.6 1-.6l2.4-.2c.5 0 1 .3 1.2.8l.9 2.2c.2.5.1 1.1-.3 1.5l-1.5 1.5c-.4.4-1 .6-1.6.5C10.8 19.8 4.2 13.2 3.3 6.9c-.1-.6.1-1.2.5-1.6l1.4-1.5Z" />
          </svg>
        </a>
      </div>

      <nav className={open ? 'nav-panel is-open' : 'nav-panel'} aria-label="Mobile">
        {LINKS.map(([to, label]) => (
          <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
