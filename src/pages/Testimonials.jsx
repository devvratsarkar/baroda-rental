import AskBand from '../components/AskBand'
import PageIntro from '../components/PageIntro'
import { TESTIMONIALS } from '../data/content'

export default function TestimonialsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Clients"
        title="Testimonials"
        lead="Notes from people who bought, sold, or rented with Baroda Realtor."
        crumbs={[{ label: 'Testimonials' }]}
      />
      <section className="section section-tight">
        <div className="wrap grid cards-3">
          {TESTIMONIALS.map((item) => (
            <blockquote className="quote-card" key={item.name + item.quote}>
              <p>{item.quote}</p>
              <strong>{item.name}</strong>
            </blockquote>
          ))}
        </div>
      </section>
      <AskBand />
    </>
  )
}
