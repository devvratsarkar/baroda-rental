import { Link } from 'react-router-dom'
import { COMPANY, SERVICES } from '../data/content'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <h3>Contact</h3>
          <p>{COMPANY.contact}</p>
          <p>{COMPANY.address}</p>
          <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        <div>
          <h3>Explore</h3>
          <Link to="/properties">Find Property</Link>
          <Link to="/about">About Us</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/projects/aashray-elegance">Aashray Elegance</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div>
          <h3>Services</h3>
          {SERVICES.map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`}>{service.title}</Link>
          ))}
          <Link to="/emi-calculator">EMI Calculator</Link>
          <Link to="/area-converter">Area Converter</Link>
        </div>
      </div>
      <div className="wrap legal">
        <span>© {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.</span>
        <span>{COMPANY.tagline}</span>
      </div>
    </footer>
  )
}
