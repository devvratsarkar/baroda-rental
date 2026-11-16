import { Link, useParams } from 'react-router-dom'
import AskBand from '../components/AskBand'
import PageIntro from '../components/PageIntro'
import PropertyCard from '../components/PropertyCard'
import { PROPERTIES, getLocality, matchesLocality } from '../data/content'

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

  const listings = PROPERTIES.filter((property) => matchesLocality(property, place))

  return (
    <>
      <PageIntro
        eyebrow="Locality"
        title={`Property in ${place.name}`}
        lead={`Current sale and rent listings around ${place.name}. If a property is not listed, ask and we will check it.`}
        crumbs={[{ label: place.name }]}
      />
      <section className="section section-tight">
        <div className="wrap">
          <div className="locality-banner">
            <img src={place.image} alt={place.name} />
            <div>
              <p className="eyebrow">Now listed</p>
              <h2>{listings.length} {listings.length === 1 ? 'property' : 'properties'}</h2>
              <p>Homes, plots, and commercial sites that Baroda Realtor is handling in this area.</p>
              <Link className="btn" to={`/properties?location=${encodeURIComponent(place.name)}`}>Filter this area</Link>
            </div>
          </div>
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
      <AskBand title={`Looking in ${place.name.split(',')[0]}?`} copy="Tell us the size and budget. We will shortlist what is actually available." />
    </>
  )
}
