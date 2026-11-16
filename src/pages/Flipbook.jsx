import { useState } from 'react'
import PageIntro from '../components/PageIntro'
import { FLIPBOOK } from '../data/content'

export default function FlipbookPage() {
  const [open, setOpen] = useState(null)
  const page = open == null ? null : FLIPBOOK[open]

  function move(step) {
    setOpen((index) => (index + step + FLIPBOOK.length) % FLIPBOOK.length)
  }

  return (
    <>
      <PageIntro
        eyebrow="Catalogue"
        title="Brochure"
        lead="The Baroda Realtor property brochure. Open a page to read it larger."
        crumbs={[{ label: 'Brochure' }]}
      />
      <section className="section section-tight">
        <div className="wrap brochure">
          {FLIPBOOK.map((src, index) => (
            <button key={src} type="button" onClick={() => setOpen(index)}>
              <img src={src} alt={`Brochure page ${index + 1}`} />
              <span>Page {index + 1}</span>
            </button>
          ))}
        </div>
      </section>
      {page ? (
        <div className="brochure-view" role="dialog" aria-modal="true" aria-label="Brochure page">
          <button className="brochure-nav" type="button" onClick={() => move(-1)} aria-label="Previous page">‹</button>
          <img src={page} alt={`Brochure page ${open + 1}`} />
          <button className="brochure-nav" type="button" onClick={() => move(1)} aria-label="Next page">›</button>
          <button className="brochure-close" type="button" onClick={() => setOpen(null)}>Close</button>
        </div>
      ) : null}
    </>
  )
}
