import { Link, useParams } from 'react-router-dom'
import EnquiryForm from '../components/EnquiryForm'
import { SERVICES, getService } from '../data/content'

export default function ServicePage() {
  const service = getService(useParams().slug)

  if (!service) {
    return (
      <section className="section">
        <div className="wrap empty">
          <h1>Service not found</h1>
          <Link className="btn" to="/">Back home</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${service.image})` }}>
        <div className="wrap">
          <p className="crumbs">Home / {service.title}</p>
          <h1>{service.title}</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap detail">
          <div>
            {service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <h2>Explore more services</h2>
            <div className="grid cards-3">
              {SERVICES.filter((item) => item.slug !== service.slug).map((item) => (
                <Link className="info-card" key={item.slug} to={`/services/${item.slug}`}>
                  <img src={item.image} alt={item.title} />
                  <div className="body"><h3>{item.title}</h3></div>
                </Link>
              ))}
            </div>
          </div>
          <EnquiryForm subject={service.title} />
        </div>
      </section>
    </>
  )
}
