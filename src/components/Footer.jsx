import { Link } from 'react-router-dom'
import { COMPANY, SERVICES } from '../data/content'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-brand-row">
          <Link className="footer-brand" to="/">
            <img src={COMPANY.logo} alt="" />
            <span>
              <strong>{COMPANY.name}</strong>
              <em>{COMPANY.tagline}</em>
            </span>
          </Link>
          <div className="footer-actions">
            <a href={COMPANY.phoneHref}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 3.5h3l1.5 4-2 1.2a13 13 0 0 0 6.3 6.3l1.2-2 4 1.5v3A2 2 0 0 1 18.5 19 15.5 15.5 0 0 1 5 5.5a2 2 0 0 1 1.5-2z" /></svg>
              {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4zM4 7l8 6 8-6" /></svg>
              Email
            </a>
            <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19l1.2-3.4A8 8 0 1 1 8.4 17.8L5 19z" /></svg>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-grid">
          <div>
            <h3>Contact</h3>
            <p className="footer-person">{COMPANY.contact}</p>
            <p className="footer-address">{COMPANY.address}</p>
            <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
          <div className="footer-links">
            <h3>Explore</h3>
            <Link to="/properties">Find Property</Link>
            <Link to="/about">About Us</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/projects/aashray-elegance">Aashray Elegance</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="footer-links">
            <h3>Services</h3>
            {SERVICES.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>{service.title}</Link>
            ))}
            <Link to="/emi-calculator">EMI Calculator</Link>
            <Link to="/area-converter">Area Converter</Link>
          </div>
        </div>

        <div className="legal">
          <span>© {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.</span>
          <span>{COMPANY.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
