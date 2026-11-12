import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PropertyCard from '../../components/PropertyCard'
import {
  ABOUT,
  ABOUT_SCENE,
  BHK_OPTIONS,
  BUDGETS,
  HERO,
  LOCALITIES,
  PROPERTIES,
  PROPERTY_TYPES,
  SERVICES,
  TESTIMONIALS,
} from '../../data/content'

export default function HomePage() {
  const navigate = useNavigate()
  const [slide, setSlide] = useState(0)
  const current = HERO[slide]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlide((index) => (index + 1) % HERO.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [])

  function search(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const params = new URLSearchParams()
    ;['location', 'intent', 'type', 'bhk', 'budget'].forEach((key) => {
      const value = data.get(key)
      if (value) params.set(key, value)
    })
    navigate(`/properties?${params.toString()}`)
  }

  return (
    <>
      <section className="hero">
        {HERO.map((item, index) => (
          <div
            key={item.image}
            className={index === slide ? 'hero-slide is-active' : 'hero-slide'}
            style={{ backgroundImage: `url(${item.image})` }}
            aria-hidden={index !== slide}
          />
        ))}
        <div className="hero-copy">
          <div className="hero-copy-inner">
            <p className="hero-price">{current.price}</p>
            <h1><Link to={current.to}>{current.title}</Link></h1>
            <p className="hero-desc">{current.copy}</p>
            <Link className="hero-more" to={current.to}>{current.cta}</Link>
          </div>
        </div>

        <button
          className="hero-arrow hero-arrow-prev"
          type="button"
          aria-label="Previous"
          onClick={() => setSlide((index) => (index - 1 + HERO.length) % HERO.length)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 4.5 8 12l7.5 7.5" /></svg>
        </button>
        <button
          className="hero-arrow hero-arrow-next"
          type="button"
          aria-label="Next"
          onClick={() => setSlide((index) => (index + 1) % HERO.length)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.5 4.5 7.5 7.5-7.5 7.5" /></svg>
        </button>
        <div className="hero-dots">
          {HERO.map((item, index) => (
            <button
              key={item.to}
              type="button"
              className={index === slide ? 'is-active' : ''}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setSlide(index)}
            />
          ))}
        </div>

        <form className="hero-search" onSubmit={search}>
          <label>
            <span>Where</span>
            <select name="location" defaultValue="" aria-label="Where">
              <option value="">Where do you want to go?</option>
              {LOCALITIES.map((place) => <option key={place.slug}>{place.name}</option>)}
            </select>
          </label>
          <label>
            <span>Intent</span>
            <select name="intent" defaultValue="" aria-label="Buy or rent">
              <option value="">Buy or rent</option>
              <option value="Buy">Buy</option>
              <option value="Rent">Rent</option>
            </select>
          </label>
          <label>
            <span>Property type</span>
            <select name="type" defaultValue="" aria-label="Property type">
              <option value="">Property type</option>
              {PROPERTY_TYPES.map((type) => <option key={type}>{type}</option>)}
            </select>
          </label>
          <label>
            <span>Budget</span>
            <select name="budget" defaultValue="" aria-label="Budget">
              <option value="">Budget</option>
              {BUDGETS.map((budget) => <option key={budget.id} value={budget.id}>{budget.label}</option>)}
            </select>
          </label>
          <label>
            <span>Bedrooms</span>
            <select name="bhk" defaultValue="" aria-label="Bedrooms">
              <option value="">Bedrooms</option>
              {BHK_OPTIONS.map((bhk) => <option key={bhk}>{bhk}</option>)}
            </select>
          </label>
          <button type="submit">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5" />
              <path d="M16 16.5 20.5 21" />
            </svg>
            Search
          </button>
        </form>
      </section>

      <section className="section section-featured">
        <div className="wrap">
          <div className="section-head section-head-row">
            <div>
              <p className="eyebrow">Handpicked</p>
              <h2>Featured Properties</h2>
              <p>Homes, plots, and land currently listed by Baroda Realtor</p>
            </div>
            <Link className="text-link" to="/properties">
              View all properties
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
          <div className="grid cards-3">
            {PROPERTIES.filter((item) => item.featured).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-places">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Neighbourhoods</p>
            <h2>Popular Localities</h2>
            <p>The areas clients ask for across Vadodara, Bharuch, Anand, and Panchmahal</p>
          </div>
          <div className="grid cards-4">
            {LOCALITIES.slice(0, 8).map((place) => {
              const parts = place.name.split(', ')
              const city = parts.length > 1 ? parts.pop() : ''
              const area = parts.join(', ')
              return (
                <Link className="place-card" key={place.slug} to={`/localities/${place.slug}`}>
                  <img src={place.image} alt={place.name} />
                  <span>
                    <strong>{area}</strong>
                    {city ? <em>{city}</em> : null}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="wrap">
          <div className="section-head">
            <h2>Services We Offer</h2>
          </div>
          <div className="grid cards-4">
            {SERVICES.map((service) => (
              <Link className="info-card" key={service.slug} to={`/services/${service.slug}`}>
                <img src={service.image} alt={service.title} />
                <div className="body"><h3>{service.title}</h3></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <img className="about-photo" src={ABOUT_SCENE} alt="A home listed with Baroda Realtor" />
          <div>
            <h2>About Baroda Realtor</h2>
            <p className="muted">{ABOUT.intro}</p>
            <Link className="btn" to="/about">About us details</Link>
            <div className="stats">
              {ABOUT.stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="wrap">
          <div className="section-head">
            <h2>Testimonials</h2>
            <p>What clients say about working with Baroda Realtor</p>
          </div>
          <div className="grid cards-3">
            {TESTIMONIALS.slice(0, 6).map((item) => (
              <blockquote className="quote-card" key={item.name + item.quote}>
                <p>“{item.quote}”</p>
                <strong>{item.name}</strong>
              </blockquote>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 28 }}>
            <Link className="btn" to="/testimonials">View all testimonials</Link>
          </p>
        </div>
      </section>
    </>
  )
}
