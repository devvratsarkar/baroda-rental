import { Link, useParams } from 'react-router-dom'
import EnquiryForm from '../components/EnquiryForm'
import PageIntro from '../components/PageIntro'
import { SERVICES, getService } from '../data/content'

export default function ServicePage() {
  const service = getService(useParams().slug)

  if (!service) {
    return (
      <section className="section">
        <div className="wrap empty">
          <h1>Service not found</h1>
          <Link className="btn" to="/services">All services</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <PageIntro
        eyebrow="Service"
        title={service.title}
        lead={service.paragraphs[0]}
        crumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]}
      />
      <section className="section section-tight">
        <div className="wrap layout">
          <div>
            <img className="detail-photo service-photo" src={service.image} alt={service.title} />
            <div className="prose">
              {service.paragraphs.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <h2>Other services</h2>
            <div className="grid cards-3">
              {SERVICES.filter((item) => item.slug !== service.slug).map((item) => (
                <Link className="info-card" key={item.slug} to={`/services/${item.slug}`}>
                  <img src={item.image} alt="" />
                  <div className="body">
                    <h3>{item.title}</h3>
                    <span className="info-more">Learn more</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <aside className="side-card">
            <h2>Ask about {service.title}</h2>
            <EnquiryForm subject={service.title} />
          </aside>
        </div>
      </section>
    </>
  )
}
