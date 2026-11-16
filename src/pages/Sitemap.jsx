import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import { LOCALITIES, PROPERTIES, SERVICES } from '../data/content'

const CITIES = ['Vadodara', 'Bharuch', 'Anand', 'Panchmahal']

export default function SitemapPage() {
  return (
    <>
      <PageIntro
        eyebrow="Index"
        title="Sitemap"
        lead="Every page on this site: company, services, tools, localities, and listings."
        crumbs={[{ label: 'Sitemap' }]}
      />
      <section className="section section-tight">
        <div className="wrap sitemap-grid">
          <div>
            <h2>Company</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/career">Career</Link>
            <Link to="/brochure">Brochure</Link>
            <Link to="/projects">Our Projects</Link>
            <Link to="/projects/aashray-elegance">Aashray Elegance</Link>
          </div>
          <div>
            <h2>Services and tools</h2>
            <Link to="/services">All services</Link>
            {SERVICES.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>{service.title}</Link>
            ))}
            <Link to="/emi-calculator">EMI Calculator</Link>
            <Link to="/area-converter">Area Converter</Link>
            <Link to="/post-property">Post Property</Link>
            <Link to="/post-requirement">Post Requirement</Link>
            <Link to="/properties">Find Property</Link>
          </div>
          <div>
            <h2>Cities</h2>
            {CITIES.map((city) => (
              <Link key={city} to={`/properties?city=${encodeURIComponent(city)}`}>Property in {city}</Link>
            ))}
          </div>
          <div>
            <h2>Localities</h2>
            {LOCALITIES.map((place) => (
              <Link key={place.slug} to={`/localities/${place.slug}`}>{place.name}</Link>
            ))}
          </div>
          <div className="sitemap-listings">
            <h2>Properties</h2>
            {PROPERTIES.map((property) => (
              <Link key={property.id} to={`/properties/${property.slug}`}>{property.title}</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
