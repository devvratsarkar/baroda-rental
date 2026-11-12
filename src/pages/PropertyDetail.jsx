import { Link, useParams } from 'react-router-dom'
import EnquiryForm from '../components/EnquiryForm'
import PropertyCard from '../components/PropertyCard'
import { PROPERTIES, getProperty } from '../data/content'

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

  const related = PROPERTIES.filter((item) => item.slug !== property.slug && item.city === property.city).slice(0, 3)

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="crumbs">Home / Properties / {property.location}</p>
          <h1>{property.title}</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap detail">
          <div>
            <img className="detail-photo" src={property.image} alt={property.title} />
            <div className="facts">
              <div><span>Price</span><strong>{property.price === 'On request' ? 'On request' : `₹ ${property.price}`}</strong></div>
              <div><span>Status</span><strong>{property.status}</strong></div>
              <div><span>Location</span><strong>{property.location}</strong></div>
              <div><span>Type</span><strong>{property.type}</strong></div>
              {property.bhk ? <div><span>Bedroom</span><strong>{property.bhk}</strong></div> : null}
              {property.size ? <div><span>Area</span><strong>{property.size}</strong></div> : null}
            </div>
            <h2>Description</h2>
            <p>{property.description}</p>
          </div>
          <EnquiryForm subject={property.title} />
        </div>
        {related.length > 0 ? (
          <div className="wrap" style={{ marginTop: 48 }}>
            <h2>More in {property.city}</h2>
            <div className="grid cards-3">
              {related.map((item) => <PropertyCard key={item.id} property={item} />)}
            </div>
          </div>
        ) : null}
      </section>
    </>
  )
}
