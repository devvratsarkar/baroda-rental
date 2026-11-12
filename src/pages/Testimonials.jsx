import { TESTIMONIALS } from '../data/content'

export default function TestimonialsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="crumbs">Home / Testimonials</p>
          <h1>Testimonials</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid cards-3">
          {TESTIMONIALS.map((item) => (
            <blockquote className="quote-card" key={item.name + item.quote}>
              <p>{item.quote}</p>
              <strong>{item.name}</strong>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  )
}
