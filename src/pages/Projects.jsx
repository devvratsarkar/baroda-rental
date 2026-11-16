import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import { PROJECT } from '../data/content'

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Developments"
        title="Our Projects"
        lead="Residential projects that Baroda Realtor is offering in Vadodara."
        crumbs={[{ label: 'Our Projects' }]}
      />
      <section className="section section-tight">
        <div className="wrap">
          <Link className="project-card" to={`/projects/${PROJECT.slug}`}>
            <img src={PROJECT.image} alt={PROJECT.title} />
            <div>
              <p className="eyebrow">{PROJECT.status}</p>
              <h2>{PROJECT.title}</h2>
              <p>{PROJECT.location}</p>
              <ul>
                <li>{PROJECT.unit}</li>
                <li>{PROJECT.area}</li>
                <li>Possession {PROJECT.possession}</li>
              </ul>
              <span className="info-more">View project</span>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
