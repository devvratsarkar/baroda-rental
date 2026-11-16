import { Link, useParams } from 'react-router-dom'
import EnquiryForm from '../components/EnquiryForm'
import PageIntro from '../components/PageIntro'
import PropertyCard from '../components/PropertyCard'
import { PROPERTIES, formatPrice, getProperty } from '../data/content'

export default function PropertyDetailPage() {
  const { slug } = useParams()
  const property = getProperty(slug)

  if (!property) {
    return (
      <section className="section">
        <div className="wrap empty">
          <h1>Property not found</h1>
          <Link className="btn" to="/properties">Back to properties</Link>
        </div>
      </section>
    )
  }

  const related = PROPERTIES.filter((item) => item.slug !== property.slug && (
    item.location === property.location || item.type === property.type
  )).slice(0, 3)
  const facts = [
    ['Price', formatPrice(property.price)],
    ['Status', property.status],
    ['Location', property.location],
    ['Type', property.type],
    property.bhk ? ['Bedrooms', property.bhk] : null,
    property.size ? ['Area', property.size] : null,
  ].filter(Boolean)

  return (
    <>
      <PageIntro
        eyebrow={property.status}
        title={property.title}
        lead={property.location}
        crumbs={[{ label: 'Properties', to: '/properties' }, { label: property.location }]}
      >
        <p className="intro-price">{formatPrice(property.price)}</p>
      </PageIntro>
      <section className="section section-tight">
        <div className="wrap layout">
          <div>
            <img className="detail-photo" src={property.image} alt={property.title} />
            <div className="fact-grid">
              {facts.map(([label, value]) => (
                <div key={label}><span>{label}</span><strong>{value}</strong></div>
              ))}
            </div>
            <h2>Description</h2>
            <div className="prose"><p>{property.description}</p></div>
          </div>
          <aside className="side-card">
            <h2>Enquire about this property</h2>
            <p className="muted">Hareshbhai will reply with price, visit time, and papers.</p>
            <EnquiryForm subject={property.title} />
          </aside>
        </div>
        {related.length > 0 ? (
          <div className="wrap related">
            <div className="section-head">
              <p className="eyebrow">Similar</p>
              <h2>More properties you can consider</h2>
            </div>
            <div className="grid cards-3">
              {related.map((item) => <PropertyCard key={item.id} property={item} />)}
            </div>
          </div>
        ) : null}
      </section>
    </>
  )
}
