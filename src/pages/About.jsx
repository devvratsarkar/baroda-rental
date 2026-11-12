import { ABOUT, COMPANY } from '../data/content'

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
      <section className="page-hero">
        <div className="wrap">
          <p className="crumbs">Home / About Us</p>
          <h1>About Us</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <p>{ABOUT.intro}</p>
          <p>{ABOUT.leader}</p>
          <p>{ABOUT.locations}</p>
          <div className="profile-table grid cards-3" style={{ marginTop: 24 }}>
            {FACTS.map(([label, value]) => (
              <div key={label}><span>{label}</span><strong>{value}</strong></div>
            ))}
          </div>
          <div className="grid cards-4" style={{ marginTop: 36 }}>
            {ABOUT.pillars.map((pillar) => (
              <article className="info-card" key={pillar.title}>
                <img src={pillar.image} alt={pillar.title} />
                <div className="body">
                  <h3>{pillar.title}</h3>
                  <p className="muted">{pillar.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
