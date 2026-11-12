import { Link } from 'react-router-dom'

export default function PropertyCard({ property }) {
  const price = property.price === 'On request' ? 'Price on request' : `₹ ${property.price}`
  const details = [property.status, property.bhk, property.size].filter(Boolean).join('  ·  ')

  return (
    <article className="property-card">
      <Link className="card-media" to={`/properties/${property.slug}`}>
        <img src={property.image} alt={property.title} />
        {property.status ? <span className="card-status">{property.status}</span> : null}
        <span className="card-price">{price}</span>
      </Link>
      <div className="body">
        <h3>
          <Link to={`/properties/${property.slug}`}>{property.title}</Link>
        </h3>
        <p className="location">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
            <circle cx="12" cy="11" r="2.2" />
          </svg>
          {property.location}
        </p>
        {details ? <p className="meta-line">{details}</p> : null}
      </div>
    </article>
  )
}
