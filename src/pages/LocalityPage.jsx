import { Link, useParams } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'
import { PROPERTIES, getLocality } from '../data/content'

export default function LocalityPage() {
  const place = getLocality(useParams().slug)
  if (!place) {
    return (
      <section className="section">
        <div className="wrap empty">
          <h1>Locality not found</h1>
          <Link className="btn" to="/properties">Find property</Link>
        </div>
      </section>
    )
  }

  const area = place.name.split(',')[0].toLowerCase()
  const listings = PROPERTIES.filter((property) => property.location.toLowerCase().includes(area))

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${place.image})` }}>
        <div className="wrap">
          <p className="crumbs">Home / {place.name}</p>
          <h1>Property for sale in {place.name}</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          {listings.length === 0 ? (
            <div className="empty">
              <p>Listings in {place.name} are available on request. Send an enquiry and Baroda Realtor will share current options.</p>
              <Link className="btn" to="/contact">Contact us</Link>
            </div>
          ) : (
            <div className="grid cards-3">
              {listings.map((property) => <PropertyCard key={property.id} property={property} />)}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
