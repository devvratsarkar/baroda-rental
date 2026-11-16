import { Link } from 'react-router-dom'
import EnquiryForm from '../components/EnquiryForm'
import PageIntro from '../components/PageIntro'
import { PROJECT } from '../data/content'

export default function ProjectPage() {
  return (
    <>
      <PageIntro
        eyebrow={PROJECT.status}
        title={PROJECT.title}
        lead={PROJECT.location}
        crumbs={[{ label: 'Our Projects', to: '/projects' }, { label: PROJECT.title }]}
      />
      <section className="section section-tight">
        <div className="wrap layout">
          <div>
            <img className="detail-photo" src={PROJECT.image} alt={PROJECT.title} />
            <div className="fact-grid">
              {PROJECT.facts.map(([label, value]) => (
                <div key={label}><span>{label}</span><strong>{value}</strong></div>
              ))}
            </div>
            <h2>About the project</h2>
            <div className="prose">
              {PROJECT.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <Link className="btn" to="/localities/gotri-road-vadodara">Properties in Gotri</Link>
          </div>
          <aside className="side-card">
            <h2>Ask for availability</h2>
            <p className="muted">Price, floor, and a site visit for {PROJECT.title}.</p>
            <EnquiryForm subject={PROJECT.title} />
          </aside>
        </div>
      </section>
    </>
  )
}
