import { Link } from 'react-router-dom'
import AskBand from '../components/AskBand'
import PageIntro from '../components/PageIntro'
import { SERVICES } from '../data/content'

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="What we do"
        title="Our Services"
        lead="Buying, selling, renting, and advisory support across Vadodara and nearby cities."
        crumbs={[{ label: 'Services' }]}
      />
      <section className="section section-tight">
        <div className="wrap grid cards-2">
          {SERVICES.map((service) => (
            <Link className="info-card service-feature" key={service.slug} to={`/services/${service.slug}`}>
              <img src={service.image} alt={service.title} />
              <div className="body">
                <h3>{service.title}</h3>
                <p className="muted">{service.paragraphs[0]}</p>
                <span className="info-more">Learn more</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <AskBand title="Tell us what you need" copy="A flat, a plot, a shop, or industrial land. Share the area and we will take it from there." />
    </>
  )
}
