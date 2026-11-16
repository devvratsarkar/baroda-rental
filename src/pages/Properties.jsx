import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import PropertyCard from '../components/PropertyCard'
import {
  BHK_OPTIONS,
  BUDGETS,
  LOCALITIES,
  PROPERTIES,
  PROPERTY_TYPES,
  matchesLocality,
  priceToNumber,
} from '../data/content'

export default function PropertiesPage() {
  const [params, setParams] = useSearchParams()
  const location = params.get('location') || ''
  const city = params.get('city') || ''
  const intent = params.get('intent') || ''
  const type = params.get('type') || ''
  const bhk = params.get('bhk') || ''
  const budget = params.get('budget') || ''

  const results = useMemo(() => {
    const range = BUDGETS.find((item) => item.id === budget)
    const place = LOCALITIES.find((item) => item.name === location)
    return PROPERTIES.filter((property) => {
      if (city && property.city.toLowerCase() !== city.toLowerCase()) return false
      if (place && !matchesLocality(property, place)) return false
      if (location && !place && !property.location.toLowerCase().includes(location.toLowerCase().split(',')[0])) return false
      if (intent && property.intent !== intent) return false
      if (type && property.type !== type) return false
      if (bhk && property.bhk !== bhk) return false
      if (range) {
        const amount = priceToNumber(property.price)
        if (amount == null) return false
        if (range.min && amount < range.min) return false
        if (range.max && amount >= range.max) return false
      }
      return true
    })
  }, [location, city, intent, type, bhk, budget])

  function update(key, value) {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next)
  }

  const title = city ? `Property in ${city}` : type || 'Find Property'

  return (
    <>
      <PageIntro
        eyebrow="Listings"
        title={title}
        lead="Homes, plots, shops, offices, and industrial land listed with Baroda Realtor."
        crumbs={[{ label: 'Find Property' }]}
      />
      <section className="section section-tight">
        <div className="wrap">
          <div className="filter-panel">
            <label>
              Locality
              <select value={location} onChange={(event) => update('location', event.target.value)}>
                <option value="">All localities</option>
                {LOCALITIES.map((place) => <option key={place.slug}>{place.name}</option>)}
              </select>
            </label>
            <label>
              Intent
              <select value={intent} onChange={(event) => update('intent', event.target.value)}>
                <option value="">Buy or rent</option>
                <option value="Buy">Buy</option>
                <option value="Rent">Rent</option>
              </select>
            </label>
            <label>
              Type
              <select value={type} onChange={(event) => update('type', event.target.value)}>
                <option value="">Any type</option>
                {PROPERTY_TYPES.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label>
              Bedrooms
              <select value={bhk} onChange={(event) => update('bhk', event.target.value)}>
                <option value="">Any bedroom</option>
                {BHK_OPTIONS.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label>
              Budget
              <select value={budget} onChange={(event) => update('budget', event.target.value)}>
                <option value="">Any budget</option>
                {BUDGETS.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
              </select>
            </label>
          </div>
          <p className="result-line">{results.length} {results.length === 1 ? 'property' : 'properties'}</p>
          {results.length === 0 ? (
            <div className="empty">
              <h2>No matching properties</h2>
              <p>Try another locality, or send an enquiry and Baroda Realtor will look for it.</p>
            </div>
          ) : (
            <div className="grid cards-3">
              {results.map((property) => <PropertyCard key={property.id} property={property} />)}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
