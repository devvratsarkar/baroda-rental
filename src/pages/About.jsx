import { Link } from 'react-router-dom'
import AskBand from '../components/AskBand'
import PageIntro from '../components/PageIntro'
import { ABOUT, ABOUT_SCENE, COMPANY } from '../data/content'

const FACTS = [
  ['Name of CEO', COMPANY.contact],
  ['Business Type', COMPANY.businessType],
  ['Legal Status of Firm', COMPANY.legalStatus],
  ['Operating Cities', COMPANY.cities],
  ['Year of Establishment', COMPANY.year],
  ['Number Of Employees', COMPANY.employees],
]

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Since 2009"
        title="About Us"
        lead="A Vadodara real estate practice for buying, selling, and renting homes, plots, and land."
        crumbs={[{ label: 'About Us' }]}
      />
      <section className="section section-tight">
        <div className="wrap split">
          <img className="about-photo" src={ABOUT_SCENE} alt="A home listed with Baroda Realtor" />
          <div className="prose">
            <h2>Baroda Realtor</h2>
            <p>{ABOUT.intro}</p>
            <p>{ABOUT.leader}</p>
            <p>{ABOUT.locations}</p>
            <Link className="btn" to="/contact">Talk to Hareshbhai</Link>
          </div>
        </div>
      </section>
      <section className="section section-steps">
        <div className="wrap">
          <div className="stats">
            {ABOUT.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">How we work</p>
            <h2>Startup, vision, mission, and values</h2>
          </div>
          <div className="grid cards-4">
            {ABOUT.pillars.map((pillar) => (
              <article className="info-card" key={pillar.title}>
                <img src={pillar.image} alt="" />
                <div className="body">
                  <h3>{pillar.title}</h3>
                  <p className="muted">{pillar.copy}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="fact-grid fact-grid-plain">
            {FACTS.map(([label, value]) => (
              <div key={label}><span>{label}</span><strong>{value}</strong></div>
            ))}
          </div>
        </div>
      </section>
      <AskBand />
    </>
  )
}
