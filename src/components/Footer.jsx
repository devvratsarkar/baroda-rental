import { Link } from 'react-router-dom'
import { ABOUT, COMPANY, PROPERTIES, formatPrice } from '../data/content'

export default function Footer() {
  const featured = PROPERTIES.filter((property) => property.featured).slice(0, 2)
  const about = ABOUT.intro.split('. ').slice(0, 2).join('. ') + '.'

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <h3>About {COMPANY.name}</h3>
          <p className="footer-about">{about}</p>
        </div>

        <div>
          <h3>Featured Listings</h3>
          {featured.map((property) => (
            <Link className="footer-listing" key={property.id} to={`/properties/${property.slug}`}>
              <img src={property.image} alt="" />
              <span>
                <strong>{property.title}</strong>
                <em>{property.location}</em>
                <b>{formatPrice(property.price)}</b>
              </span>
            </Link>
          ))}
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>{COMPANY.address}</p>
          <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          <nav className="footer-links" aria-label="Explore">
            <Link to="/properties">Properties</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/services">Services</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/emi-calculator">EMI Calculator</Link>
            <Link to="/area-converter">Area Converter</Link>
            <Link to="/post-property">Post Property</Link>
            <Link to="/career">Career</Link>
            <Link to="/brochure">Brochure</Link>
            <Link to="/sitemap">Sitemap</Link>
          </nav>
        </div>
      </div>

      <div className="sub-footer">
        <div className="wrap">
          <div className="legal">
            <span>© {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.</span>
            <span className="legal-tag">{COMPANY.tagline}</span>
            <nav aria-label="Footer">
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
